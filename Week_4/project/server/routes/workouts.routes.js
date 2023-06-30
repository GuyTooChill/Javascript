const WorkoutsController = require('../controllers/workouts.controller')

module.exports = (app) => {
    app.post('/api/workouts/new', WorkoutsController.createWorkout)

    app.get('/api/workouts', WorkoutsController.allWorkouts)

    app.get('/api/workouts/:id', WorkoutsController.readOne)

    app.put('/api/workouts/:id', WorkoutsController.update)

    app.delete('/api/workouts/:id', WorkoutsController.delete)
}