var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "db",
});

const createConnection = () => {
  connection.connect((error) => {
    if (error) {
      console.error("Deu erro na conexão", error);
    } else {
      console.log("Deu certo!");
    }
  });
};

function solicitarItem() {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM items", (err, result) => {
      resolve(result);
    });
  });
}

function enviarItem() {
  return new Promise((resolve, reject) => {
    connection.query(
      " INSERT INTO items (name, email) VALUES (?, ?)",
      (err, result) => {
        resolve(result);
      }
    );
  });
}

function atualizarItem(item, id) {
  const query =
    "update items SET nome=" +
    item.nome +
    "email=" +
    item.email +
    "where id=" +
    id;

  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      resolve(results);
    });
  });
}

function deletarItem(id) {
  const query = "DELETE FROM items WHERE  id=" + id;

  return new Promise((resolve, reject) => {
    connection.query(query, [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  createConnection,
  solicitarItem,
  enviarItem,
  atualizarItem,
  deletarItem,
};
