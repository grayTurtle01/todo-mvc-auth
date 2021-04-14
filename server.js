const express = require('express')

// Enviroment Variables
dotenv = require('dotenv')
dotenv.config({path: './config/.env'})


//DB Conexion
connectDB = require('./config/dbConexion')
connectDB()

server = express()

//*** Authentication ****
passport = require('passport')
require('./config/passport')(passport)

session = require('express-session')

//*** Save Session on DB ***/
MongoStore = require('connect-mongo')


//Session MiddleWare
server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({mongoUrl: "mongodb://localhost/todo_mvc_DB"})
}))

//Passport MiddleWares
server.use(passport.initialize())
server.use(passport.session())



//SetUp
server.set('view engine', 'ejs') 

//MiddleWares
server.use( express.urlencoded({extended:true}))
server.use( express.static('public') )
server.use( express.json() )

// Routers
rootRouter = require('./routes/home')
todosRouter = require('./routes/todos')
authRouter = require('./routes/auth')

// Routes-Middlewars
server.use("/", rootRouter )
server.use("/todos", todosRouter)
server.use("/auth", authRouter)

PORT = process.env.PORT || 8000
server.listen(PORT, 
              console.log(`Server running on port: ${PORT}`))
