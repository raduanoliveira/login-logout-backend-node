const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({message: 'Bem vindo a app login-logout'})
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
})