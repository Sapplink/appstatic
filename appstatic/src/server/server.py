from flask import Flask, render_template, request
from flask_cors import CORS
app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def init():
    if request.method == 'GET':
        pass
    if request.method == 'POST':
        pass

    return render_template('./app.component.html')
