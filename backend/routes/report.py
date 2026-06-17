from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from routes.auth import get_current_user
from services.report_generator import generate_report
from database import db
from bson import ObjectId
import io
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.enums import TA_CENTER

router = APIRouter(prefix="/report", tags=["Report"])


@router.get("/{assessment_id}")
async def get_report(assessment_id: str, user_id: str = Depends(get_current_user)):
    doc = await db.assessments.find_one({
        "_id": ObjectId(assessment_id),
        "user_id": user_id
    })
    if not doc:
        raise HTTPException(status_code=404, detail="Assessment not found")

    report = generate_report(doc["inputs"], doc["derived"], doc["result"])
    return { "assessment_id": assessment_id, "report": report }


@router.get("/{assessment_id}/pdf")
async def download_pdf(assessment_id: str, user_id: str = Depends(get_current_user)):
    doc = await db.assessments.find_one({
        "_id": ObjectId(assessment_id),
        "user_id": user_id
    })
    if not doc:
        raise HTTPException(status_code=404, detail="Assessment not found")

    report = generate_report(doc["inputs"], doc["derived"], doc["result"])

    if "error" in report:
        raise HTTPException(status_code=500, detail=report["error"])

    inputs = doc["inputs"]
    derived = doc["derived"]
    result = doc["result"]

    buffer = io.BytesIO()
    pdf = SimpleDocTemplate(buffer, pagesize=A4,
        rightMargin=2*cm, leftMargin=2*cm,
        topMargin=2*cm, bottomMargin=2*cm)

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle('Title', parent=styles['Title'],
        fontSize=22, textColor=colors.HexColor('#1a1a2e'),
        spaceAfter=6, alignment=TA_CENTER)
    h1_style = ParagraphStyle('H1', parent=styles['Heading1'],
        fontSize=14, textColor=colors.white,
        backColor=colors.HexColor('#1a1a2e'),
        borderPad=8, spaceBefore=16, spaceAfter=8)
    h2_style = ParagraphStyle('H2', parent=styles['Heading2'],
        fontSize=11, textColor=colors.HexColor('#1a1a2e'),
        spaceBefore=10, spaceAfter=4)
    body_style = ParagraphStyle('Body', parent=styles['Normal'],
        fontSize=10, leading=14, spaceAfter=6)
    label_style = ParagraphStyle('Label', parent=styles['Normal'],
        fontSize=9, textColor=colors.HexColor('#666666'), spaceAfter=2)

    def h1(text): return Paragraph(text, h1_style)
    def h2(text): return Paragraph(text, h2_style)
    def body(text): return Paragraph(
        text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'), body_style)
    def label(text): return Paragraph(
        text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'), label_style)
    def sp(): return Spacer(1, 0.3*cm)

    story = []

    # Title
    story.append(Paragraph("Corporate AI Strategy Report", title_style))
    story.append(Paragraph(
        f"{inputs['industry']} — {inputs['country']}",
        ParagraphStyle('Sub', parent=styles['Normal'], fontSize=12,
        textColor=colors.HexColor('#4a4a8a'), alignment=TA_CENTER, spaceAfter=4)))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#4a4a8a')))
    story.append(sp())

    # Key Metrics
    story.append(h1("Key Metrics"))
    for m in [
        f"AI Investment: ${inputs['ai_investment_usd']:,.0f} USD",
        f"Deployment Count: {inputs['deployment_count']} systems",
        f"Training Hours: {inputs['employee_training_hours']} hrs/year",
        f"Predicted Cost Savings: ${result['cost_savings']:,.0f} USD",
        f"Predicted Revenue Impact: ${result['revenue_impact']:,.0f} USD",
        f"Predicted ROI: {result['roi']:.1f}%",
        f"AI Success Probability: {result['success_probability']:.0f}%",
        f"AI Maturity Score: {derived['ai_maturity_score']:.1f}/10",
        f"Automation Rate: {derived['automation_rate']:.0%}",
    ]:
        story.append(body(f"• {m}"))
    story.append(sp())

    # Executive Summary
    story.append(h1("Executive Summary"))
    story.append(body(report.get("executive_summary", "")))
    story.append(sp())

    # Strengths
    story.append(h1("Strengths"))
    for i, s in enumerate(report.get("strengths", []), 1):
        story.append(h2(f"{i}. {s['title']}"))
        story.append(body(s['explanation']))
        story.append(label(f"Business Advantage: {s['business_advantage']}"))
        story.append(sp())

    # Risks
    story.append(h1("Risks and Weaknesses"))
    for i, r in enumerate(report.get("risks", []), 1):
        story.append(h2(f"{i}. {r['title']}"))
        story.append(body(r['explanation']))
        story.append(label(f"Consequence: {r['consequence']}"))
        story.append(sp())

    # Improvement Opportunities
    story.append(h1("Improvement Opportunities"))
    for i, o in enumerate(report.get("improvement_opportunities", []), 1):
        story.append(h2(f"{i}. {o['problem']}"))
        story.append(body(o['recommended_action']))
        story.append(label(f"Expected Outcome: {o['expected_outcome']}"))
        story.append(sp())

    # Roadmap
    story.append(h1("Strategic Roadmap"))
    for phase_key in ["phase_1", "phase_2", "phase_3"]:
        phase = report.get("roadmap", {}).get(phase_key, {})
        if phase:
            story.append(h2(phase.get("title", "")))
            story.append(body(f"Objective: {phase.get('objective', '')}"))
            for action in phase.get("actions", []):
                story.append(body(f"• {action}"))
            story.append(label(f"Expected Outcome: {phase.get('expected_outcome', '')}"))
            story.append(sp())

    # Benchmark
    story.append(h1("Industry Benchmark"))
    benchmark = doc.get("benchmark", {}).get("benchmark", {})
    if benchmark:
        story.append(body(f"Industry: {benchmark.get('industry', '')} ({benchmark.get('sample_size', 0):,} companies)"))
        story.append(body(f"Industry Avg ROI: {benchmark.get('avg_roi', 0):.1f}%"))
        story.append(body(f"Industry Avg Cost Savings: ${benchmark.get('avg_cost_savings', 0):,.0f}"))
        story.append(body(f"Industry Avg Revenue Impact: ${benchmark.get('avg_revenue_impact', 0):,.0f}"))
        story.append(body(f"Industry Avg AI Maturity: {benchmark.get('avg_ai_maturity_score', 0):.1f}/10"))
        story.append(body(f"Industry Avg Automation Rate: {benchmark.get('avg_automation_rate', 0):.0%}"))

        percentiles = doc.get("benchmark", {}).get("percentiles", {})
        if percentiles:
            story.append(sp())
            story.append(h2("Your Percentile Rankings"))
            for metric, data in percentiles.items():
                story.append(body(f"• {metric.replace('_', ' ').title()}: {data['interpretation']}"))

    pdf.build(story)
    buffer.seek(0)

    return StreamingResponse(
        buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"attachment; filename=stratify_report_{assessment_id}.pdf"
        }
    )