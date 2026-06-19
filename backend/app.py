from flask import Flask
from flask_cors import CORS
import pymysql

def conectar():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="",
        database="catalogo",
        cursorclass=pymysql.cursors.DictCursor
    )

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "API funcionando"



@app.route("/filmes")
def listar_filmes():
    conexao = conectar()
    cursor = conexao()

    cursor.execute(
        "SELECT * FROM filmes"
    )

    filmes = cursor.fetchall()
    conexao.close()
    return filmes

app.route("/filmes", methods=["POST"])
def cadastras_filmes():
    dados = request.json
    conexao = conectar()
    cursor = conexao.cursor()
    sql = """INSERT INTO filmes (titulo, imagem, descricao) values (%s, %s, %s)"""

    cursor.execute(
        sql, (dados["titulo"], dados["imagem"], dados["descricao"])
    )
    conexao.commit()
    conexao.close()
    return {"mensagem":"filme cadastrado"}
app.run()