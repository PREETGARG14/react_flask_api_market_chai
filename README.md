# react_flask_api_market_chai
# react_flask_api_market_chai
1. git clone --branch final_ code_team https://github.com/PREETGARG14/react_flask_api_market_chai.git
2. sudo apt-get update
3. sudo apt-get install python3-venv
4. python3 -m venv venv
5. source venv/bin/activate
6. pip install -r requirements.txt
7. cd market
8. inside market there is a file name processor.py => use this file to train this bot
9. python processor.py
10. now bot is trained , you are  ready to launch
11. cd ..
12. python ./run.py
13.  open chrome ,your code will run proper


**PART 1:**


t : python --version
t : python3 --version
t : mkdir 
t: cd FlaskMarket
t: pip install flask
t : sudo apt-get install python3-flask
create market.py->
		from flask import Flask

		app = Flask(__name__)

		@app.route("/")
		def hello_world():
		    return "<p>Hello, World!</p>"
t: set FLASK_APP=market.py
t: export FLASK_APP=market.py
t: flask run
if we make changes each time we have to restart server ,so debug mode ko on karo
t: set FLASK_DEBUG=1
t: export FLASK_DEBUG=1
t:flask run
craete another route /concept of dynamic routes ->
						@app.route('/about/<username>')
						def about_page(username):
						    return f'<h1>about me page {username}</h1>'
delete @app.route about vala in market.py
code inside @app.route each function is useless when we have complex html so do this below 
craete a dir templates in FLASKMARKET and inside that create a home.html
do this ->in market.py 
		from flask import Flask,render_template

		app = Flask(__name__)

		@app.route("/")
		def home_page():
		    return render_template('home.html') 	
do this -> in templates/home.html
		<h1>Home page</h1>	
change home.html to a full fleged html page ->
				<!doctype html>
				<html lang="en">
				  <head>
				    <!-- Required meta tags -->
				    <meta charset="utf-8">
				    <meta name="viewport" content="width=device-width, initial-scale=1">

				    <!-- Bootstrap CSS -->
				    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

				    <title>Hello, world!</title>
				  </head>
				  <body>
				    <h1>Hello, world!</h1>

				    <!-- Optional JavaScript; choose one of the two! -->

				    <!-- Option 1: Bootstrap Bundle with Popper -->
				    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

				    <!-- Option 2: Separate Popper and Bootstrap JS -->
				    <!--
				    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
				    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
				    -->
				  </body>
				</html>

how to handle 2 route at same html file -> so make changes in market.py
					from flask import Flask,render_template

					app = Flask(__name__)

					@app.route("/")
					@app.route('/home')
					def home_page():
					    return render_template('home.html') 

			

before creating db file 
do in terminal :> pip install flask-sqlalchemy, pip3 install flask-SQLAlchemy
includde that also in python file

then we create model for flask framework database


add thsi in python file->from flask_sqlalchemy import SQLAlchemy
			  //app.config['SQLALCHEMY_DATABASE_URI'] = 'engine_name://username:password@localhost/dbname'//
			  app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/market'
			  db=SQLAlchemy(app)
			  
start pgadmin->  sudo service postgresql start

		  
open termnimal:
step1:python3
step2:from market import db
step3:db.create_all()
step4:from market import Item
step5:item1=Item(name="aalo chai",price=450,barcode='520123454325',description='meethi hai aachi bhi')
step6:db.session.add(item1)
step7:db.session.commit()
step8:Item.query.all()
Step9:Item.query.filter_by(price=450)
step10:>>> for item in Item.query.filter_by(price=450):
		...     item.name 
		...
step11:exit()
all after db was active in pgadmin





line 119 to 138 is implementation of line 95 to 109



HI Preet
(base) i1543@preetgarg:~/FlaskMarket$ python3
Python 3.8.8 (default, Apr 13 2021, 19:58:26) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from market import db
>>> db.create_all()
>>> from market import Item
>>> item1=Item(name="aalo chai",price=450,barcode='520123454325',description='meethi hai aachi bhi')
>>> db.session.add(item1)
>>> db.session.commit()
>>> Item.query.all()
[Item aalo chai]
>>> Item.query.filter_by(price=450)
<flask_sqlalchemy.BaseQuery object at 0x7f45b8979f70>
>>> for item in Item.query.filter_by(price=450):
...     item.name 
... 
'aalo chai'
>>> exit()



**PART 2**
  
  **DATABASE RELATIONSHIP **
  
  
  (base) i1543@preetgarg:~/FlaskMarket$ python3
Python 3.8.8 (default, Apr 13 2021, 19:58:26) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from market.models import db
>>> db.drop_all()
>>> db.create_all()
>>> from market.models import Item,User
>>> u1=User(username='preet',password_hash='123456',email_address='preet@gmail.com')
>>> db.session.add(u1)
>>> db.session.commit()
>>> User.query.all()
[<User 1>]
>>> for user in User.query.filter_by(password_hash='123456'):
...     user.username
... 
'preet'
>>> item1=Item(name="aalo chai",price=450,barcode='520123454325',description='meethi hai aachi bhi')
>>> db.session.add(item1)
>>> db.session.commit()
>>> item2=Item(name="meethi chai",price=550,barcode='567123454325',description='badiya ek dum')
>>> db.session.add(item2)
>>> db.session.commit()
>>> Item.query.all()
[Item aalo chai, Item meethi chai]
>>> i1=Item.query.filter_by(name='allo chai')
>>> i1
<flask_sqlalchemy.BaseQuery object at 0x7fd3a15cff70>
>>> i1.owner
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'BaseQuery' object has no attribute 'owner'
>>> i1.owner
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'BaseQuery' object has no attribute 'owner'
>>> i1=Item.query.filter_by(name='allo chai').first()
>>> i1
>>> i1
>>> i1.owner
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'owner'
>>> i1
>>> item1
Item aalo chai
>>> item1.owner
>>> item1.owner=User.query.filter_by(username='preet').first()
>>> db.session.commit(item1)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: commit() takes 1 positional argument but 2 were given
>>> db.session.add(item1)
>>> db.session.commit()
Traceback (most recent call last):
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/engine/base.py", line 1770, in _execute_context
    self.dialect.do_execute(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/engine/default.py", line 717, in do_execute
    cursor.execute(statement, parameters)
psycopg2.ProgrammingError: can't adapt type 'User'

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<string>", line 2, in commit
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/session.py", line 1428, in commit
    self._transaction.commit(_to_root=self.future)
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/session.py", line 829, in commit
    self._prepare_impl()
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/session.py", line 808, in _prepare_impl
    self.session.flush()
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/session.py", line 3262, in flush
    self._flush(objects)
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/session.py", line 3402, in _flush
    transaction.rollback(_capture_exception=True)
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/util/langhelpers.py", line 70, in __exit__
    compat.raise_(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/util/compat.py", line 211, in raise_
    raise exception
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/session.py", line 3362, in _flush
    flush_context.execute()
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/unitofwork.py", line 455, in execute
    rec.execute(self)
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/unitofwork.py", line 629, in execute
    util.preloaded.orm_persistence.save_obj(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/persistence.py", line 234, in save_obj
    _emit_update_statements(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/orm/persistence.py", line 998, in _emit_update_statements
    c = connection._execute_20(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/engine/base.py", line 1582, in _execute_20
    return meth(self, args_10style, kwargs_10style, execution_options)
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/sql/elements.py", line 329, in _execute_on_connection
    return connection._execute_clauseelement(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/engine/base.py", line 1451, in _execute_clauseelement
    ret = self._execute_context(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/engine/base.py", line 1813, in _execute_context
    self._handle_dbapi_exception(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/engine/base.py", line 1994, in _handle_dbapi_exception
    util.raise_(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/util/compat.py", line 211, in raise_
    raise exception
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/engine/base.py", line 1770, in _execute_context
    self.dialect.do_execute(
  File "/home/i1543/anaconda3/lib/python3.8/site-packages/sqlalchemy/engine/default.py", line 717, in do_execute
    cursor.execute(statement, parameters)
sqlalchemy.exc.ProgrammingError: (psycopg2.ProgrammingError) can't adapt type 'User'
[SQL: UPDATE item SET owner=%(owner)s WHERE item.id = %(item_id)s]
[parameters: {'owner': <User 1>, 'item_id': 1}]
(Background on this error at: http://sqlalche.me/e/14/f405)
>>> db.session.rollback()
>>> item1.owner
>>> i1.owner
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'owner'
>>> item1.owner=User.query.filter_by(username='preet').first().id
>>> db.session.add(item1)
>>> db.session.commit()
>>> item1.owner
1
>>> i=Item.query.filter_by(name='aalo chai')
>>> i=Item.query.filter_by(name='aalo chai').first()
>>> i.owned_user
<User 1>
>>> Item.query.all()
[Item meethi chai, Item aalo chai]

  
**  PART 3**
**  FORMS IN FLASK**
  
  
  we have to import form in python file in forms.py
in terminal ->pip3 install -U Flask-WTF or try with pip
            ->pip3 install wtforms or try with pip
import in forms.py ->from flask_wtf import FlaskForm
                     from wtforms import StringField, PasswordField, SubmitField

generating secret key in our app in forms
i1543@preetgarg:~$ python3
Python 3.8.10 (default, Sep 28 2021, 16:10:42) 
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import os
>>> os.urandom(12).hex()
'd8c054f87c3a6142b8aea948'
  
  
  
**  PART 4**
  
 ** EMAIL AUTHENTICATION**
  
  
  i1543@preetgarg:~$ cd FlaskMarket/
i1543@preetgarg:~/FlaskMarket$ pip install email-validator
Collecting email-validator
  Downloading email_validator-1.1.3-py2.py3-none-any.whl (18 kB)
Requirement already satisfied: idna>=2.0.0 in /usr/lib/python3/dist-packages (from email-validator) (2.8)
Collecting dnspython>=1.15.0
  Downloading dnspython-2.1.0-py3-none-any.whl (241 kB)
     |████████████████████████████████| 241 kB 428 kB/s 
Installing collected packages: dnspython, email-validator
Successfully installed dnspython-2.1.0 email-validator-1.1.3
i1543@preetgarg:~/FlaskMarket$ pip install b_crypt
ERROR: Could not find a version that satisfies the requirement b_crypt (from versions: none)
ERROR: No matching distribution found for b_crypt
i1543@preetgarg:~/FlaskMarket$ pip install flask_bcrypt
Collecting flask_bcrypt
  Downloading Flask-Bcrypt-0.7.1.tar.gz (5.1 kB)
Requirement already satisfied: Flask in /usr/lib/python3/dist-packages (from flask_bcrypt) (1.1.1)
Requirement already satisfied: bcrypt in /usr/lib/python3/dist-packages (from flask_bcrypt) (3.1.7)
Building wheels for collected packages: flask-bcrypt
  Building wheel for flask-bcrypt (setup.py) ... done
  Created wheel for flask-bcrypt: filename=Flask_Bcrypt-0.7.1-py3-none-any.whl size=5010 sha256=878a335d82b5dd3642b9332009ce5b2bdf29ad852727f502028c9bd51b961700
  Stored in directory: /home/i1543/.cache/pip/wheels/8a/d9/0e/dc762c4ebc76f581397a2e25991db6efd148640b5616ab9210
Successfully built flask-bcrypt
Installing collected packages: flask-bcrypt
Successfully installed flask-bcrypt-0.7.1
i1543@preetgarg:~/FlaskMarket$ code .
i1543@preetgarg:~/FlaskMarket$ pip install flask_login
Collecting flask_login
  Downloading Flask_Login-0.5.0-py2.py3-none-any.whl (16 kB)
Requirement already satisfied: Flask in /usr/lib/python3/dist-packages (from flask_login) (1.1.1)
Installing collected packages: flask-login
Successfully installed flask-login-0.5.0
i1543@preetgarg:~/FlaskMarket$ code .
i1543@preetgarg:~/FlaskMarket$ 
  
  
