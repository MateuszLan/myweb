from flask import Flask, render_template, abort, make_response, request, redirect, url_for
from AzureDB import AzureDB

from flask_dance.contrib.github import make_github_blueprint, github
import secrets
import os
app = Flask(__name__)
app.secret_key = secrets.token_hex(16) #generujemy sekretny klucz aplikacji
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1' #zezwalamy na polaczenie w lokalnym srodowisku bez https
github_blueprint = make_github_blueprint(
#client_id="7703588b0ebee5a9e41e", #lokalny
#client_secret="89f998afca3c2770756b027585c6c5b4921c6de3",#tu wklej swoj wygenerowany client secret z github
client_id="9bb0e5f0bfba6aea4e5e", #tu wklek swoj wygenerowany id z github (do chmury)
client_secret="5f7d3186445e6a31b8ce385576e340b70eed1df0",#tu wklej swoj wygenerowany client secret z github(do chmury)
)
app.register_blueprint(github_blueprint, url_prefix='/login')

@app.route('/')
def github_login():
    if not github.authorized:
        return redirect(url_for('github.login'))
    else:
        account_info = github.get('/user')
    if account_info.ok:
        return render_template('index.html')
    return '<h1>Request failed!</h1>'

@app.route('/index', methods=['GET', 'POST'])
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
    return render_template("Ksiega.html", data = data)

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
    app.run(debug=True)

