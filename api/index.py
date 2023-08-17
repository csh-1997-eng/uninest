
# source uninest_venv/bin/activate
import os
import sys
import logging 
import pandas as pd

from postgres_handler import postgres_handler

# TODO: https://realpython.com/flask-javascript-frontend-for-rest-api/

# Build Logger
logging.basicConfig(
    level=logging.DEBUG,  # Set the minimum log level
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
    #filename="app.log",  # Optional: Save logs to a file
    #filemode="a"  # Optional: Append mode
)
logger = logging.getLogger(__name__)

# Check Application Path
logger.info(sys.path)

# Continue imports
from flask import Flask, render_template, request, redirect, jsonify
from flask_restful import reqparse, Api, Resource
from flask_cors import CORS

# Flask config
app = Flask(__name__)
api = Api(app)
CORS(app)

db_config = {
    'dbname': 'uninest_db',
    'user': 'cole',
    'password': 'csh-deV-97!',
    'host': 'localhost',
    'port': 'your_port',
}


@app.route('/')
def landing_page():
    logger.info(" Hit the landing page")
    return jsonify({'message': 'Form data received successfully landing_page'})

# Resident sign-up page route
@app.route('/resident-sign-up', methods=['POST', 'GET'])
def resident_sign_up():
    # Get the form data from the request
    page_data = request.json
    logger.debug('Received data: %s', page_data)

    user_data = {
        'FirstName': page_data['FirstName'],
        'LastName': page_data['LastName'],
        'Email': page_data['Email'],
        'Password': page_data['Password'],
        'DateOfBirth': str(pd.to_datetime(page_data['DateOfBirth']).date()), 
        'Gender': page_data['Gender'],
        'Phone': page_data['Phone'],
        'ProfileImageURL': page_data['ProfileImageURL'],
        'CurrentAddress': page_data['CurrentAddress'],
        'University': page_data['University'],
        'StateOfResidency': page_data['StateOfResidency'],
        'UserType': page_data['UserType']
    }

    # Process the data (e.g., save it to the database)
    # Replace the following print statement with your database logic
    logger.debug('Parsed data: %s', user_data)

    pgHandler = postgres_handler(db_config)

    """CREATE TABLE Users ( 
    UserID SERIAL PRIMARY KEY,"
    "FirstName VARCHAR(255) NOT NULL,"
    "LastName VARCHAR(255) NOT NULL,"
    "Email VARCHAR(255) UNIQUE NOT NULL,"
    "Password VARCHAR(255) NOT NULL,"
    "DateOfBirth DATE,"
    "Gender VARCHAR(20),"
    "Phone VARCHAR(20),"
    "ProfileImageURL TEXT,"
    "currentAddress VARCHAR(255)," 
    "University VARCHAR(255),"  
    "StateOfResidency VARCHAR(255),"  
    "UserType VARCHAR(20) CHECK (UserType IN ('Student', 'Landlord')));"""

    pgHandler.INSERT_INTO_USERS_TABLE(user_data)
    pgHandler.COMMIT_WRAP_UP()

    # Return a response (e.g., success message)

    output = jsonify({'message': 'Form data received successfully',
                    'payload': user_data})
    
    logger.info(output)
    
    return output

# # Landlord sign-up page route
# @app.route('/landlord-sign-up')
# def landlord_sign_up():
#     return jsonify({'message': 'Form data received successfully landlord_sign_up'})

# # Listings page route
# @app.route('/listings')
# def listings():
#     # You can retrieve listing data from the database here
#     # and pass it to the template for rendering
#     listings_data = [
#         {
#             'title': 'Apartment 1',
#             'description': 'Spacious apartment near campus',
#             'price': '$1000/month',
#             'location': 'City A',
#         },
#         {
#             'title': 'Apartment 2',
#             'description': 'Cozy studio apartment',
#             'price': '$800/month',
#             'location': 'City B',
#         },
#         # Add more listings data as needed
#     ]
#     return jsonify({'message': 'Form data received successfully'})

# # Publish listings route (form to post new apartment listing to the database)
# @app.route('/publish-listings', methods=['GET', 'POST'])
# def publish_listings():
#     if request.method == 'POST':
#         # Process and store the new apartment listing in the database
#         # Access form data using request.form['form_field_name']
#         new_listing_title = request.form['title']
#         new_listing_description = request.form['description']
#         new_listing_price = request.form['price']
#         new_listing_location = request.form['location']
#         # Save the data to the database or perform other necessary actions
#         # Redirect to the listings page after successful submission
#         return redirect('/listings')

#     return jsonify({'message': 'Form data received successfully publish_listings'})

if __name__ == '__main__':
    app.run(debug=True)
