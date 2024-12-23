from sqlalchemy import Table, Column, Integer, String
from app.db import metadata

user = Table(
    "user",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("prenom", String(50)),
    Column("nom", String(50)),
    Column("email", String(100), unique=True),
    Column("password", String(255)),
)
