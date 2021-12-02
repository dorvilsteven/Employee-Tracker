INSERT INTO departments (name) 
VALUES
('Corporate'),
('Finance'),
('Sales'),
('Engineering'), 
('Management');

INSERT INTO roles (title, salary, deparment_id) 
VALUES 
('Sales Person', 50000, 3),
('Software Engineer', 100000, 4),
('Lead Engineer', 150000, 4),
('Accountant', 80000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Chandler', 'Bing', 4, NULL),
  ('Rachel', 'Green', 1, NULL),
  ('Ross', 'Geller', 3, NULL),
  ('Phoebe', 'Buffay', 2, NULL),
  ('Joey', 'Tribbiani', 1, NULL),
  ('Monica', 'Geller', 4, NULL);