package org.example;

import java.util.ArrayList;
import java.util.List;

public class EmployeeManager {

    private List<Employee> employees = new ArrayList<>();
    private int nextId = 1;

    // Add new employee
    public Employee addEmployee(String name, String department) {
        validate(name, department);

        Employee employee = new Employee(nextId++, name.trim(), department.trim());
        employees.add(employee);

        return employee;
    }

    // Fetch all employees
    public List<Employee> getAllEmployees() {
        return new ArrayList<>(employees);
    }

    // Validation logic
    private void validate(String name, String department) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        if (department == null || department.trim().isEmpty()) {
            throw new IllegalArgumentException("Department cannot be empty");
        }
    }
}
