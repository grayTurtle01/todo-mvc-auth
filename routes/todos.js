express = require('express')
todosRouter = express.Router()
todosController = require('../controllers/todos')
const {ensureAuth, ensureGuest} = require('../middleware/auth')


todosRouter.get("/", ensureAuth, todosController.renderTodos)
//todosRouter.get("/public", todosController.renderAllTodos)
todosRouter.post("/addTask", todosController.addTask)
todosRouter.delete("/deleteTask", todosController.deleteTask)
todosRouter.put("/toogleState", todosController.toogleState)
todosRouter.put("/updateTask/:id", todosController.updateTask)


module.exports = todosRouter
