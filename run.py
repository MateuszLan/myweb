from flask import Flask, render_template, abort, make_response, request, redirect, url_for
import requests
from AzureDB import AzureDB

from flask_dance.contrib.github import make_github_blueprint, github
import secrets
import os
app = Flask(__name__)
app.secret_key = secrets.token_hex(16)#generujemy sekretny klucz aplikacji
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '0' #zezwalamy na polaczenie w lokalnym srodowisku bez https
github_blueprint = make_github_blueprint(
#client_id="7703588b0ebee5a9e41e", #działa lokalnie (http://192.168.1.11:80)
#client_secret="89f998afca3c2770756b027585c6c5b4921c6de3", #lokalnie
client_id="9bb0e5f0bfba6aea4e5e", #(do chmury) (https://76781apka.azurewebsites.net)
client_secret="5f7d3186445e6a31b8ce385576e340b70eed1df0", #chmura
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
            imie = request.form.get('imie')
            if not imie:
                if request.form['typ'] == 'edit':
                    a.azureUPData(nick=request.form['nick'], text1=request.form['text1'], text2=request.form['text2'])
                else:
                    a.azureDeleteData(nick=request.form['nick'], text1=request.form['text1'])
            else:
                a.azureAddData(imie=request.form['imie'], text=request.form['text'])
        data = a.azureGetData()
    return render_template("Ksiega.html", data = data)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    return render_template('contact.html')

@app.route('/test', methods=['GET', 'POST'])
def test():
    if request.method == 'GET':
        return render_template('test.html')
    if request.method == 'POST':
        info = requests.get('http://127.0.0.1:5000/')
        dane = info.json()
        zmienna = request.form['Nr']
        Wykonawca = dane[zmienna]['Wykonawca']
        Tytul = dane[zmienna]['Tytul']
        Format = dane[zmienna]['Format']
        Odp1 = "Wykonawca: %s " % (Wykonawca)
        Odp2 = "Tytuł: %s " % (Tytul)
        Odp3 = "Format : %s " % (Format)
        return render_template('test.html', data1=Odp1, data2=Odp2, data3=Odp3)
    return render_template('test.html')


@app.route('/error_denied')
def error_denied():
    abort(401)


@app.route('/error_not_found')
def error_not_found():
    response = make_response(render_template('template.html', name='ERROR 404'), 404)
    response.headers['X-Something'] = 'A value'
    return response

# @app.route('/qwe')
# def qwe():
#     return "XD"

@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=80)

