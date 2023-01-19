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
    #rtn = Ssh(pi, 'uptime')
    #log.File(rtn)
    return {'time': datetime.datetime.now().strftime("%H:%M:%S")}
@app.route("/login", methods = ['POST','GET'])
def login():
    if request.method == 'POST':
        studentName = request.form['studentName'] 
        website = request.form.get('website')
        return '%s </br> %s' % (studentName, website) 

# run the application
if __name__ == "__main__":
    app.run(host=config["host"], port=config["port"], debug=True)
