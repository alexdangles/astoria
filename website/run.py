from flask import Flask, render_template, url_for
import os
import math
import datetime
from helper import *

# creates a Flask application, named app
app = Flask(__name__, template_folder='templates')
app.config['TEMPLATES_AUTO_RELOAD'] = True


# main page
@app.route("/")
def index():
    msg3 = 'wowsers'
    return render_template('index.html', msg=msg3, wid=979)


@app.route("/sayhello")
def hello():
    return Ssh(pi, '~/scripts/home_arduino.py status')


@app.route('/login')
def login():
    return render_template('login.html')


# run the application
if __name__ == "__main__":
    app.run(debug=True)
