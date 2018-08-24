CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(300) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);

INSERT INTO burger (burger_name, devoured) VALUES ('Cheese burger', FALSE);
INSERT INTO burger (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burger (burger_name, devoured) VALUES ('Pizza burger', FALSE);
