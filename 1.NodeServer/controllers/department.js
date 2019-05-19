const DepartmentModel = require('../models/department');
const EmployeeModel = require('../models/employee');

const model = new DepartmentModel();
const employeeModel = new EmployeeModel();


class DepartmentController {

    getAll(req, res) {

        model.getAll()
            .then(departments => {
                const ids = departments.map(d => d.id);
                employeeModel.getByMultipleIds(ids).then(employee => {
                    departments.forEach(d => {
                        d.employee = employee.filter(item => item.department_id == d.id);
                    });
                    res.status(200).send(departments);
                })
            })
            .catch(error => {
                throw error;
            });
    }

    create(req, res) {
        model.createDepartment(req.body.name)
            .then(data => { res.send("department created") })
            .catch(err => { res.status(400).send("Unexcepted error") })
    }

}


module.exports = DepartmentController