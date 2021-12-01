DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    deparment_id INTEGER,
    CONSTRAINT fk_department 
        FOREIGN KEY (deparment_id) 
        REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_role 
        FOREIGN KEY (role_id) 
        REFERENCES roles(id) ON DELETE SET NULL,
    CONSTRAINT fk_manager 
        FOREIGN KEY (manager_id) 
        REFERENCES employees(id) ON DELETE SET NULL
);