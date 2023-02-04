from flask import Flask, request
import datetime
from helper import *

# creates a Flask application, named app
app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

log = Log(config['logfile'])
# main page

@app.route("/sayhello")
def hello():
    utime = Ssh(pi, 'uptime')
    log.File(utime)
    return {"utime": utime}
@app.route("/login", methods = ['POST','GET'])
def login():
    if request.method == 'POST':
        studentName = request.form['studentName'] 
        website = request.form.get('website')
        return '{} </br> {}'.format(studentName, website) 

# run the application
if __name__ == "__main__":
    app.run(host=config["host"], port=config["port"], debug=True)
