const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use(express.json())

const db = require('./app/models')

const Role = db.role

function initial(){
    Role.create({
        id: 1,
        name:'user'
    })

    Role.create({
        id: 2,
        name:'moderator'
    })

    Role.create({
        id: 3,
        name:'admin'
    })
}

db.sequelize.sync({force:true}).then(()=>{
    console.log('Drop and Resync Db')
    initial()
})

//for production
// db.sequelize.sync()

app.get('/',(req,res)=>{
    res.json({message: 'Bem vindo a app login-logout'})
})

require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
})