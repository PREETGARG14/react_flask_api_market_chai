# flask imports
from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
import uuid # for public id
import hashlib
from werkzeug.security import generate_password_hash, check_password_hash
# imports for PyJWT authentication
import jwt
from datetime import datetime, timedelta
from functools import wraps
from models import *
from flask.templating import render_template

# configuration
# NEVER HARDCODE YOUR CONFIGURATION IN YOUR CODE
# INSTEAD CREATE A .env FILE AND STORE IN IT

db.create_all()
db.session.commit()

app.config['SECRET_KEY'] = 'keyissecured12123'
token = ""

# decorator for verifying the JWT
def token_required(f):
	@wraps(f)
	def decorated(*args, **kwargs):
		token = None
		# jwt is passed in the request header
		if 'x-access-token' in request.headers:
			token = request.headers['x-access-token']
		# return 401 if token is not passed
		if not token:
			return jsonify({'message' : 'Token is missing !!'}), 401

		try:
			# decoding the payload to fetch the stored details
			data = jwt.decode(token, app.config['SECRET_KEY'])
			current_user = Users.query\
				.filter_by(public_id = data['public_id'])\
				.first()
		except:
			return jsonify({
				'message' : 'Token is invalid !!'
			}), 401
		# returns the current logged in users contex to the routes
		return f(current_user, *args, **kwargs)

	return decorated

@app.route('/')
def home():
    return "hello world";

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

# route for logging user in
@app.route('/loginsuccess', methods =['POST'])
def loginsuccess():
	# creates dictionary of form data
	auth = request.form

	if not auth or not auth.get('email') or not auth.get('password'):
		# returns 401 if any email or / and password is missing
		return make_response(
			'Could not verify',
			401,
			{'WWW-Authenticate' : 'Basic realm ="Login required !!"'}
		)

	user = Users.query\
		.filter_by(email = auth.get('email'))\
		.first()

	if not user:
		# returns 401 if user does not exist
		return make_response(
			'Could not verify',
			401,
			{'WWW-Authenticate' : 'Basic realm ="User does not exist !!"'}
		)

	if user.password == auth.get('password'):
		# generates the JWT Token
		token = jwt.encode({
			'public_id': user.public_id,
			'exp' : datetime.utcnow() + timedelta(minutes = 30)
		}, app.config['SECRET_KEY'])

		return make_response(jsonify({'token' : token.decode('UTF-8')}), 201)
	# returns 403 if password is wrong
	return make_response(
		'Could not verify',
		403,
		{'WWW-Authenticate' : 'Basic realm ="Wrong Password !!"'}
	)


# signup route
@app.route('/registersuccess', methods =['POST'])
def registersuccess():
	# creates a dictionary of the form data
	data = request.form
    
	# gets name, email and password
	name, email = data.get('name'), data.get('email')
	password = data.get('password')
   
    
	# checking for existing user
	user = Users.query\
		.filter_by(email = email)\
		.first()
	if not user:
		# database ORM object
		user = Users(
            public_id = str(uuid.uuid4()),
			name = name,
			email = email,
			password = password
            
		)
		# insert user
		db.session.add(user)
		db.session.commit()

		return make_response('Successfully registered.', 201)
	else:
		# returns 202 if user already exists
		return make_response('User already exists. Please Log in.', 202)

if __name__ == "__main__":
	# setting debug to True enables hot reload
	# and also provides a debuger shell
	# if you hit an error while running the server
	app.run(debug = True)
