DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;


CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(12,2),
  department_id INTEGER,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
);

INSERT INTO department (title)
VALUES
  ('Management'),
  ('Engineering'),
  ('Human Resources'),
  ('IT');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Senior Engineer', '120000', 2),
  ('Junior Engineer', '75000', 2),
  ('HR Person', '70000', 3),
  ('Department Head', '150000', 1),
  ('VP of Tech', '2500000', 1),
  ('IT Professional', '65000', 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 2),
  ('Virginia', 'Woolf', 1, 3),
  ('Piers', 'Gaveston', 1, 1),
  ('Charles', 'LeRoi', 2, 3),
  ('Katherine', 'Mansfield', 2, 1),
  ('Dora', 'Carrington', 3, 3),
  ('Edward', 'Bellamy', 3, 4),
  ('Montague', 'Summers', 1, 1),
  ('Octavia', 'Butler', 3, 2),
  ('Unica', 'Zurn', 4, 2);


-- SELECT * FROM employees;
-- SELECT * FROM roles;
-- SELECT * FROM department;

SELECT * FROM employees
LEFT JOIN roles ON employees.role_id = roles.id
LEFT JOIN department ON roles.department_id = department.id;

SELECT e.id
  , e.first_name
  , e.last_name
  , r.title
  , r.salary
  , d.title
FROM employees e
LEFT JOIN roles r ON e.role_id = r.id
LEFT JOIN department d ON r.department_id = d.id;