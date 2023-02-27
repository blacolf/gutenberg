from operator import or_
import requests, jsonify
from flask import *
import re
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
cors = CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://bla:@localhost/books'
app.app_context().push()
db = SQLAlchemy(app)

class Livre(db.Model):
    tablename='livres'
    id = db.Column(db.Integer, primary_key=True)
    titre = db.Column(db.String(),nullable=False)
    contenu = db.Column(db.Text,  nullable=False)
    image = db.Column(db.Text, nullable=False)
    auteur = db.Column(db.String())

    def repr(self):
            return f'<Livre {self.id}>'

db.create_all()


books1 = []
for i in range(100, 110):
    response = requests.get(f'http://gutendex.com/books/?={i}')
    if response.status_code == 200:
        books1 += response.json()['results']

for book in books1:
    book_id = book['id']
    book_titre = book['title']
    book_auteur = book['authors'][0]['name'] if book['authors'] else 'Unknown'
    book_contenu = "https://www.gutenberg.org/files/"+str(book_id)+"/"+str(book_id)+"-0.txt"
    book_image = "https://www.gutenberg.org/cache/epub/"+str(book_id)+"/pg"+str(book_id)+".cover.medium.jpg"

    # Ajout des données à la table d'indexb
    index_entry = Livre(id=book_id,titre=book_titre, auteur=book_auteur,contenu=book_contenu, image=book_image)
    db.session.add(index_entry)

    db.session.commit()