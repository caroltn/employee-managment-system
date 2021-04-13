USE employees_db;

-- DEPARTMENT SEEDS -----
INSERT INTO department (name) 
VALUES 
	('Sales'), 
	('Reception'),
	('Management'), 
	('Accounting'),
	('Human Resources'),
	('Quality Control'),
	('Customer Service'),
	('Supplier Relations'),
	('Warehouse');

  -- EMPLOYEE ROLE SEEDS -------
INSERT INTO `role` (title, salary, department_id) VALUES 
	('Intern', 26000, 3),
	('Warehouse', 26000, 9),
	('Accountant', 38500, 4), 
	('Receptionist', 31500, 2),
	('Human Resources', 40000, 5),
	('Regional Manager', 75000, 3),
	('Senior Accountant', 55000, 4), 
	('Warehouse Foreman', 40000, 9),
	('Supplier Relations', 50000, 8),
	('Sales Representative', 40000, 1),
	('Assistant Regional Manager', 65000, 3),
	('Customer Service Rep', 30000, 7),
	('QA Representative', 48500, 6),
	('Sales Represenative Lead', 53500, 1);

-- EMPLOYEE SEEDS -------
INSERT INTO employee 
	(first_name, last_name, role_id, manager_id) 
VALUES 
	('Michael', 'Scott', 6, null),
	('Dwight', 'Shrute', 11, 6),
	('Jim', 'Halpert', 11, 6),
	('Pam', 'Beesly', 4, 6),
	('Creed', 'Bratton', 13, 6),
	('Darryl', 'Philbin', 8, 6),
	('Roy', 'Anderson', 2, 8),
	('Madge', 'Madsen', 2, 8),
	('Jerry', 'DiCanio', 2, 8),
	('Lonnie', 'Collins', 2, 8),
	('Angela', 'Martin', 7, 6),
	('Oscar', 'Martinez', 3, 7),
	('Kevin', 'Malone', 3, 7),
	('Toby', 'Flenderson', 5, 6),
	('Andy', 'Bernard', 14, 11),
	('Stanley', 'Hudson', 10, 14),
	('Phyllis', 'Lapin', 10, 14),
	('Todd', 'Packer', 10, 14),
	('Kelly', 'Kapoor', 12, 6),
	('Meredith', 'Palmer', 9, 6),
	('Ryan', 'Howard', 1, 6);