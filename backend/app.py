from flask import Flask, request, jsonify
import pandas as pd
import matplotlib.pyplot as plt
import os
import io
import base64
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


app.config["MONGO_URI"] = "mongodb+srv://mithraadharshinimk:mithra@cluster0.7lrgnsr.mongodb.net/anomoly?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true"


mongo = PyMongo(app)


# Configure CORS

from werkzeug.security import generate_password_hash, check_password_hash
def load_data():
    df = df =pd.read_csv("/Users/mithraa/Downloads/water.csv")  
    return df

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({'message': 'Email and password are required!'}), 400

        # Check if the user already exists
        if mongo.db.users.find_one({'email': email}):
            return jsonify({'message': 'User already exists!'}), 409

      

        # Insert the new user into the database
        mongo.db.users.insert_one({'email': email, 'password': password})
        
        return jsonify({'message': 'User created successfully!'}), 201

    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({'message': 'Internal server error'}), 500




@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required!'}), 400

    # Find the user by email
    user = mongo.db.users.find_one({'email': email})

    if user and user['password'] == password:
        return jsonify({'message': 'Login successful!'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401
    

if __name__ == '__main__':
    app.run(debug=False,port=8501,use_reloader=False)