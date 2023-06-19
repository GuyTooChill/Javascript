const StudentController = require('../controllers/students.controller')

module.exports = (app) => {
    app.post('/api/students/new', StudentController.createStudent)

    app.get('/api/students', StudentController.allStudents)

    app.get('/api/students/:id', StudentController.readOne)

    app.put('/api/students/:id', StudentController.update)

    app.delete('/api/students/:id', StudentController.delete)
}