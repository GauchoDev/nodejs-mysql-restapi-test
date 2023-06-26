import { createPool } from "mysql2/promise"; /*/promise is to be able to use async await to make it asyncronous */
/*createConnection tiene un solo hilo de conneccion, mientras que createPool tiene varios */
import { DB_HOST, DB_PORT, DATABASE, DB_USER, DB_PASSWORD } from "../config.js";

export const pool = createPool({
  /*createPool es el equivalente al createConnection */
  host: DB_HOST /*Si yo estaria un servicio de nuve colocaria ejemplo 127.123.645 */,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DATABASE,
});

/*
mysql -u root -pGauchoMySQL

USE companydb_Nodejs_Rest_API_project;

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(45) DEFAULT NULL,
  salary int DEFAULT NULL,
  PRIMARY KEY (id)
);

SHOW TABLES;

DESCRIBE employee;

SHOW CREATE TABLE employee;

INSERT INTO employee VALUES (1, "Maria", 1800);
INSERT INTO employee VALUES (2, "Henry", 2000), (3, "Sam", 2500),(4, "Max", 1500);

UPDATE employee SET name = 'Joe' WHERE id = 1;


SELECT * FROM employee;

DELETE FROM employee WHERE id = 5;

-- sudo lsof -i :3306
-- sudo kill <PID> from terminal to end mysql 

 */
