const { createConnection } = require('mysql2')
const { prompt } = require('inquirer')
require('console.table')

const db = createConnection('mysql://root:rootroot@localhost/employees_db')

const viewEmployees = () => {
  db.query('SELECT * FROM employee', (err, employee) => {
    if (err) { console.log(err) }
    console.table(employee)
    mainMenu()
  })
}

const viewRoles = () => {
  db.query('SELECT*FROM roles', (err, roles) => {
    if (err) { console.log(err) }
    console.table(roles)
    mainMenu()
  })
}

const viewDepartments = () => {
  db.query('SELECT*FROM departments', (err, departments) => {
    if (err) { console.log(err) }
    console.table(departments)
    mainMenu()
  })
}

const createEmployee = () => {
  prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the first name of the employee?'
    }, {
      type: 'input',
      name: 'last_name',
      message: 'What is the last name of the employee?'
    }])
    .then(employee => {
      db.query('INSERT INTO employee SET?', employee, err => {
        if (err) { console.log(err) }
        console.log('Employee Created!')
        mainMenu()
      })
    })
    .catch(err => console.log(err))
}

const createRole = () => {
  prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the role?'
    }, {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of the role?'
    }])
    .then(role => {
      db.query('INSERT INTO roles SET?', role, err => {
        if (err) { console.log(err) }
        console.log('Role Created!')
        mainMenu()
      })
    })
    .catch(err => console.log(err))
}

const createDepartment = () => {
  prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the department name?'
    }])
    .then(department => {
      db.query('INSERT INTO departments SET?', department, err => {
        if (err) { console.log(err) }
        console.log('Department Created!')
        mainMenu()
      })
    })
    .catch(err => console.log(err))
}

const changeEmployeeRole = () => {
  db.query('SELECT*FROM employee', (err, employee) => {
    prompt([
      {
        type: 'list',
        name: 'name',
        message: 'Select an employee to change their role:',
        choices: employee.map(emp => emp.name)
      }, {
        type: 'input',
        name: 'title',
        message: 'What is the new role?'
      }
    ])
      .then(({ name, title }) => {
        db.query('UPDATE employee SET ? WHERE ?', [{ title }, { name }],
          err => {
            if (err) { console.log(err) }
            console.log('Role has been updated!')
            mainMenu()
          })
      })
  })
}

const mainMenu = () => {
  prompt([
    {
      type: 'list',
      name: 'decision',
      message: 'What would you like to do?',
      choices: ['Add Employee', 'Add Role', 'Add Department', 'View Employees', 'View Roles', 'View Departments', 'Update Employee Role', 'Exit']
    }])
    .then(res => {
      let dec = res.decision
      switch (dec) {
        case 'Add Employee':
          createEmployee()
          break
        case 'Add Role':
          createRole()
          break
        case 'Add Department':
          createDepartment()
          break
        case 'View Employees':
          viewEmployees()
          break
        case 'View Roles':
          viewRoles()
          break
        case 'View Departments':
          viewDepartments()
          break
        case 'Update Employee Role':
          changeEmployeeRole()
          break
        case 'Exit':
          console.log('Thank you, have a good day!')
          break
      }
    })
    .catch(err => console.log(err))
}

mainMenu()