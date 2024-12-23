from sqlalchemy import create_engine, MetaData

DATABASE_URL = "mysql+pymysql://admin:admin@database/db"
engine = create_engine(DATABASE_URL)
metadata = MetaData()

def init_db():
    metadata.create_all(bind=engine)
