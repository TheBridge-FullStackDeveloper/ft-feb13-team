const express = require("express");
const mysql = require("mysql2/promise");
const app = express();

app.get("/users", async (req, res) => {
  // Establecer la conexión con la base de datos
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "app",
  });

  // Hacer una consulta SELECT para obtener todos los usuarios
  const [rows, fields] = await connection.query("SELECT * FROM users");

  // Cerrar la conexión con la base de datos
  await connection.end();

  // Enviar la respuesta con los resultados
  res.send(rows);
});

app.post("/users", async function (req, res) {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "app",
      });
  const [rows, fields] = await connection.query(
    "INSERT INTO users (id_users, nombre, email, contraseña) VALUES ('6', 'Franklin', 'Garcia@garcia', 'avenida 01')"
  );
   await connection.end();
  });


  
app.put("/users/:id", async (req, res) => {
  const id = req.params.id;

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "app",
    });
  

    const [rows, fields] = await connection.query(
      `UPDATE users SET nombre='nombreModificado' WHERE id_users='${id}'`
    );
  
    await connection.end();
  
  });
app.get("/users/:id", async (req, res) => {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "app",
    });

    const [rows, fields] = await connection.query(
      `SELECT * FROM users WHERE id_users = ${req.params.id}`
    );
    await connection.end();
    res.send(rows);
  });
 
//____________________________ TAREAS __________________

app.get("/cards", async (req, res) => {
  // Establecer la conexión con la base de datos
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "app",
  });

  // Hacer una consulta SELECT para obtener todos las cards
  const [rows, fields] = await connection.query("SELECT * FROM cards");

  // Cerrar la conexión con la base de datos
  await connection.end();

  // Enviar la respuesta con los resultados
  res.send(rows);
});

app.get("/cards/:id_cards", async (req, res) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "app",
  });

  const [rows, fields] = await connection.query(
    `SELECT * FROM cards WHERE id_cards = ${req.params.id_cards}`
  );
  await connection.end();
  res.send(rows);
});

app.post("/cards", async function (req, res) {
  const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "app",
    });
const [rows, fields] = await connection.query(
  "INSERT INTO cards (id_cards, titulo, descripcion, fechaCreacion,fk_id_user) VALUES ('7', 'newCardAgregate', 'nueva carta agregada', '2021-02-15 09:55:00','6')"
);
 await connection.end();
 res.send("añadida cards")
});


app.get("/cards/users/:fk_id_user", async (req, res) => {
  const fk_id = req.params.fk_id_user;

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "app",
    });
  

    const [rows, fields] = await connection.query(
      `SELECT * FROM cards  WHERE fk_id_user='${fk_id}'`
    );
  
    await connection.end();
    res.send(rows)
  
  });

app.put("/cards/:id", async (req, res) => {
  const id = req.params.id;

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "app",
    });
  

    const [rows, fields] = await connection.query(
      `UPDATE cards SET titulo='tituloModificado' WHERE id_cards='${id}'`
    );
  
    await connection.end();
  
  });
//----------------------------------------
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
