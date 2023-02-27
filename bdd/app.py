from operator import or_
import requests, jsonify
from flask import *
import re
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
cors = CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://blacolf:@localhost/books'
app.app_context().push()
db = SQLAlchemy(app)

class Livre(db.Model):
    tablename='livres'
    id = db.Column(db.Integer, primary_key=True)
    titre = db.Column(db.String(),nullable=False)
    contenu = db.Column(db.Text,  nullable=False)
    image = db.Column(db.Text)
    auteur = db.Column(db.String())

    def repr(self):
            return f'<Livre {self.id}>'

@app.route('/',methods=['GET'])
@cross_origin()

def index():

    books = []

    # Récupération de la recherche de l'utilisateur
    book = request.args.get('book')

    # Recherche des livres par mot clé
    results = []
    books = Livre.query.filter(
        or_(Livre.titre.ilike(f'%{book}%'), Livre.auteur.ilike(f'%{book}%'))).all()
    for book in books:
        results.append({'auteur': book.auteur,'contenu':book.contenu, 'titre': book.titre,'id': book.id , 'image': book.image})

    # Recherche des livres par regex
    regex = "Adve[a-z]*ture"
    regex1 = "r'^/[A-Za-z0-9]+$/'"
    regex2 = "test*"

    if re.match('Adve[a-z]*ture', str(book)):

            regex_results = []
            books = Livre.query.all()
            for book in books:
                if re.search(book, book.contenu, book.titre):
                    regex_results.append({'auteur': book.auteur,'contenu':book.contenu, 'titre': book.titre,'id': book.id})
            results = regex_results


    #return render_template('acceuil.html', results=results, book=book)
    return jsonify(results)

if __name__ == '__main__':
     app.run()