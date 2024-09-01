from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.errorhandler(404)
def not_found(e):
    return "<h1>Page not found</h1>"