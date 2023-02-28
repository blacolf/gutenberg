from operator import or_
import requests, jsonify
from flask import *
import re
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
cors = CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:passer1234@localhost/books'
app.app_context().push()
db = SQLAlchemy(app)

class Livre(db.Model):
    tablename='livre'
    id = db.Column(db.Integer, primary_key=True)
    titre = db.Column(db.String(),nullable=False)
    contenu = db.Column(db.Text,  nullable=False)
    image = db.Column(db.Text)
    auteur = db.Column(db.String())

    def repr(self):
            return f'<Livre {self.id}>'

@app.route('/book',methods=['GET'])
@cross_origin()

def index():

    search = request.args.get('search')
    # Recherche des livres par mot clé
    results = []
    books1 = Livre.query.filter(
        or_(Livre.titre.ilike(f'%{search}%'), Livre.auteur.ilike(f'%{search}%'))).all()
    for b1 in books1:
        results.append({'auteur': b1.auteur, 'contenu':b1.contenu, 'titre': b1.titre, 'id': b1.id, 'image': b1.image})
    return jsonify(results)

@app.route('/book/searchRegex',methods=['GET'])
def searchRegex():

    regex = request.args.get('regex')
    regex_results = []

    if re.match( 'Adve[a-z]*ture', str(regex)):
            books2 = Livre.query.all()
            for b2 in books2:
                if re.search(regex,b2.contenu) or (regex, b2.titre) or (regex, b2.auteur)or (regex, b2.id):
                    regex_results.append({'auteur': b2.auteur,
                                          'contenu':b2.contenu,
                                          'titre': b2.titre,
                                          'id': b2.id,
                                          'image': b2.image
                                          })
    return jsonify(regex_results)




if __name__ == '__main__':
     app.run()
