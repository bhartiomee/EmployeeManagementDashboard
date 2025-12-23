import React, { useState } from 'react';
import './App.css';


class Employee {
  constructor(id, name, department) {
    this.id = id;
    this.name = name;
    this.department = department;
  }
}

class EmployeeManager {
  constructor() {
    this.employees = [];
    this.nextId = 1;
  }

  addEmployee(name, department) {
    if (!name || name.trim() === '') return false;
    if (!department || department.trim() === '') return false;

    const employee = new Employee(
      this.nextId++,
      name.trim(),
      department.trim()
    );
    this.employees.push(employee);
    return true;
  }

  getAllEmployees() {
    return [...this.employees];
  }
}

const manager = new EmployeeManager();

function App() {
  const [employees, setEmployees] = useState(manager.getAllEmployees());
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Name cannot be empty');
      return;
    }
    if (!department.trim()) {
      setError('Department cannot be empty');
      return;
    }

    manager.addEmployee(name, department);
    setEmployees(manager.getAllEmployees());
    setName('');
    setDepartment('');
  };

  return (
    <div className="app">
      <h1>Employee Management</h1>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Department</label>
          <input
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <button type="submit">Add Employee</button>

        {error && <p className="error">{error}</p>}
      </form>

      <h2>Employees</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="3">No employees added yet</td>
            </tr>
          ) : (
            employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
