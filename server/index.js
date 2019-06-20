const express = require('express')
const app = express()
require('dotenv').config()
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const massive = require('massive')
const session = require('express-session')

const authCtrl = require('./controllers/auth')
const postsCtrl = require('./controllers/post')

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    console.log(`db is connected!`)
    app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))
})

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 
    }
})
)

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/currentUser', authCtrl.currentUser)

app.get('/api/posts', postsCtrl.read)
app.get('/api/posts/:id', postsCtrl.getPost)
app.post('/api/posts', postsCtrl.create)
