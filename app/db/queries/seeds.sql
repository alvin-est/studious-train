-- Seeds for the department table
INSERT INTO department (name) VALUES 
('Engineering'),
('Sales'),
('Marketing');

-- Seeds for the role table
INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 80000.00, (SELECT id FROM department WHERE name = 'Engineering')),
('Sales Manager', 70000.00, (SELECT id FROM department WHERE name = 'Sales')),
('Marketing Specialist', 60000.00, (SELECT id FROM department WHERE name = 'Marketing'));

-- Seeds for the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', (SELECT id FROM role WHERE title = 'Software Engineer'), NULL),
('Jane', 'Smith', (SELECT id FROM role WHERE title = 'Sales Manager'), NULL),
('Alice', 'Johnson', (SELECT id FROM role WHERE title = 'Marketing Specialist'), NULL),
('Bob', 'Brown', (SELECT id FROM role WHERE title = 'Software Engineer'), (SELECT id FROM employee WHERE first_name = 'John' AND last_name = 'Doe'));