package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {

    public static void main(String[] args) {

        EmployeeManager employeeManager = new EmployeeManager();

        // Add employees
        employeeManager.addEmployee("Omee", "Tech");
        employeeManager.addEmployee("Bharti", "Tech");

        // Fetch and display all employees
        System.out.println("Employee List:");
        for (Employee employee : employeeManager.getAllEmployees()) {
            System.out.println(
                    employee.getId() + "," +
                            employee.getName() + "," +
                            employee.getDepartment()
            );
        }
    }
}
