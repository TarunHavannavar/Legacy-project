import sqlite3

def connect_to_db():
    try:
        conn = sqlite3.connect('inventory.db')
        print("Connection successful!")
        return conn
    except Exception as e:
        print("Error connecting to database:", e)
        return None
