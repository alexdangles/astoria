from flask import Flask, render_template, url_for
import os
import math
import datetime

# creates a Flask application, named app
app = Flask(__name__, template_folder='.')
app.config['TEMPLATES_AUTO_RELOAD'] = True


# main page
@app.route("/")


def index():
    msg3 = 'hi'
    return render_template('index.html', msg=msg3)


@app.route("/sayhello")
def hello():
    return "hello"


# run the application
if __name__ == "__main__":
    app.run()
