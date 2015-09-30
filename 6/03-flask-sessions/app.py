from flask import Flask, render_template, session, redirect, url_for, request

app=Flask(__name__)

@app.route('/')
def about():
    return render_template("about.html")

