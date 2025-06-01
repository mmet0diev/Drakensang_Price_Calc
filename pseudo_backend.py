from flask import Flask, render_template
app = Flask(__name__)

def writeToOutputFile():
    try:
        with open("count.txt", "r") as file:
            mycount = int(file.readline().strip())
    except FileNotFoundError:
        mycount = 0
        
    with open("count.txt", "w") as file:
        file.write(str(mycount + 1))
    return mycount + 1

@app.route("/")
def index():
    count = writeToOutputFile()
    return render_template("index.html", visit_count=count)
