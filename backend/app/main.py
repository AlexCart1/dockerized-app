from fastapi import FastAPI
from app.db import init_db

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    init_db()

@app.get("/")
def read_root():
    return {"message": "Hello, world!"}
