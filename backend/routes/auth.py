from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from models.user import SignupRequest, LoginRequest, TokenResponse
from services.auth_service import get_user_by_email, create_user, verify_password
from utils.jwt import create_access_token, verify_token

router = APIRouter(prefix="/auth", tags=["Auth"])
bearer_scheme = HTTPBearer()

@router.post("/signup", response_model=TokenResponse)
async def signup(body: SignupRequest):
    existing = await get_user_by_email(body.email)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    user_id = await create_user(body.full_name, body.email, body.password)
    token = create_access_token({"sub": user_id})
    return {"access_token": token}

@router.post("/login", response_model=TokenResponse)
async def login(body: LoginRequest):
    print("LOGIN HIT", body.email, body.password)  # add this
    user = await get_user_by_email(body.email)
    print("USER:", user)
    print("VERIFY:", verify_password(body.password, user["password"]) if user else False)
    
    if not user or not verify_password(body.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_access_token({"sub": str(user["_id"])})
    return {"access_token": token}

# reusable dependency for protected routes
async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)):
    user_id = verify_token(credentials.credentials)
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return user_id