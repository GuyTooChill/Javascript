const StudentController = require('../controllers/students.controller')

module.exports = (app) => {
    app.post('/api/students/new', StudentController.createStudent)

    app.get('/api/students', StudentController.allStudents)
}