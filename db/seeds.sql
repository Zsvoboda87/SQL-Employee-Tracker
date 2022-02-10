INSERT INTO department (title)
VALUES
  ('Management'),
  ('Engineering'),
  ('Human Resources'),
  ('IT');

INSERT INTO roles (title, salary)
VALUES
  ('Senior Engineer', '120000'),
  ('Junior Engineer', '75000'),
  ('HR Person', '70000'),
  ('Department Head', '150000'),
  ('VP of Tech', '2500000'),
  ('IT Professional', '65000');

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
