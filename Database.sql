DROP DATABASE App;
CREATE DATABASE App;
USE App;

CREATE TABLE Users (
    id_users INT AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contraseña VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_users)
);

CREATE TABLE Cards (
    id_cards INT AUTO_INCREMENT,
    titulo VARCHAR(30) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    fechaCreacion DATETIME NOT NULL,
    fk_id_user INT,
    PRIMARY KEY (id_cards),
	FOREIGN KEY (fk_id_user) REFERENCES Users(id_users)
	ON DELETE CASCADE
);

INSERT INTO Users 
VALUES (null, "Dani", "dani@dani", "Eltrello.1");
INSERT INTO Users 
VALUES (null, "Paco", "paco@paco", "Eltrello.1");
INSERT INTO Users 
VALUES (null, "Benjy", "Benjy@Benjy", "Eltrello.1");
INSERT INTO Users 
VALUES (null, "Fran", "fran@fran", "Eltrello.1");
INSERT INTO Users 
VALUES (null, "Javi", "javi@javi", "Eltrello.1");

INSERT INTO Cards 
VALUES(null, "Login", "Crear un login seguro", "2021-02-15 09:55:00", 2);
INSERT INTO Cards 
VALUES(null, "Logout", "Crear un logout seguro", "2021-02-15 09:55:00", 3);
INSERT INTO Cards 
VALUES(null, "Diseño API", "Crear los endpoints", "2021-02-15 09:55:00", 1);
INSERT INTO Cards 
VALUES(null, "Semilla usuarios", "Crear los usuarios en la BBDD", "2021-02-15 09:55:00", 4);
INSERT INTO Cards 
VALUES(null, "Fix bug", "Arreglar el bug de la tarjeta", "2021-02-15 09:55:00", 5);



