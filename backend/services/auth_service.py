from passlib.context import CryptContext
from database import db
from datetime import datetime

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

async def get_user_by_email(email: str):
    return await db.users.find_one({"email": email})

async def create_user(full_name: str, email: str, password: str):
    hashed = pwd_context.hash(password)

    if not hashed.startswith("$2b$"):
        raise Exception("Password hashing failed")

    result = await db.users.insert_one({
        "full_name": full_name,
        "email": email,
        "password": hashed,
        "created_at": datetime.utcnow()
    })
    return str(result.inserted_id)

def verify_password(plain: str, hashed: str):
    return pwd_context.verify(plain, hashed)