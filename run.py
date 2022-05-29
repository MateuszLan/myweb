from flask import Flask, render_template, abort, make_response, request
from AzureDB import AzureDB
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('index.html')


@app.route('/about', methods=['GET', 'POST'])
def about():
    return render_template('aboutme.html')



@app.route("/gallery", methods=['GET', 'POST'])
def gallery():
    return render_template('gallery.html')

@app.route("/gallery2", methods=['GET', 'POST'])
def gallery2():
    return render_template('gallery2.html')

@app.route("/ksiega", methods=['GET', 'POST'])
def ksiega():
    with AzureDB() as a:
        if request.method == 'POST':
            a.azureAddData(imie=request.form['imie'], text=request.form['text'])
        data = a.azureGetData()
    return render_template("Ksiega.html", data=data)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    return render_template('contact.html')


@app.route('/error_denied')
def error_denied():
    abort(401)


@app.route('/error_not_found')
def error_not_found():
    response = make_response(render_template('template.html', name='ERROR 404'), 404)
    response.headers['X-Something'] = 'A value'
    return response

@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404



if __name__ == "__main__":
    app.run(host='0.0.0.0')

