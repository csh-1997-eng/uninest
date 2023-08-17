import os
import psycopg2
import logging
import datetime

# TODO: https://www.digitalocean.com/community/tutorials/how-to-use-a-postgresql-database-in-a-flask-application
# 

logging.basicConfig(
    level=logging.DEBUG,  # Set the minimum log level
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
    #filename="app.log",  # Optional: Save logs to a file
    #filemode="a"  # Optional: Append mode
)
logger = logging.getLogger(__name__)

db_config = {
    'dbname': 'uninest_db',
    'user': 'ColeHoffman',
    'password': 'csh-deV-97!',
    'host': 'localhost',
    'port': 'your_port',
}

class postgres_handler():
    def __init__(self, db_config) -> None:
        
        self.conn = psycopg2.connect(
            host="localhost",
            database="uninest_db",
            user=db_config['user'],
            password=db_config['password'])
        logger.info("Successfully connected to db")
        
        # Open a cursor to perform database operations
        self.cur = self.conn.cursor()

    def INSERT_INTO_USERS_TABLE(self, data_dict):

        insert_columns = (
            "FirstName", "LastName", "Email", "Password", "DateOfBirth",
            "Gender", "Phone", "ProfileImageURL", "CurrentAddress", 
            "University", "StateOfResidency", "UserType"
        )
         
        insert_values = tuple(data_dict.get(col, None) for col in insert_columns)
        logger.info("Received Values : %s", insert_values)
        
        insert_query = (
            "INSERT INTO Users (FirstName, LastName, Email, Password, DateOfBirth, Gender, Phone, ProfileImageURL, CurrentAddress, University, StateOfResidency, UserType)"
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);"
        )
        
        self.cur.execute(insert_query, insert_values)
        logger.info("Inserted Users Data into DB : %s", insert_values)
        logger.info("Inserted Query into DB : %s", insert_query)
        self.conn.commit()


    def COMMIT_WRAP_UP(self):

        self.cur.close()
        self.conn.close()
