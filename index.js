import express from "express";
import cors from 'cors'
import nodemon from 'nodemon'

const port = 3000

// import { information } from './data/Banner.js'
// import { skillBarInfo } from './data/Skill.js'
// import { about } from './data/About.js'
// import { portfolioImages } from './data/Portifolio.js'
import  User  from './src/models/user.js'

const app = express()
const router = express.Router()

router.get('/', async (req, res) => {   
    await User.create({ name: 'Carlos', lastName: "Marques" });
    const users = await User.findAll()

    return response.json(users)
})

app.use(router)
app.use(cors())
app.use(express.json())

app.listen(port, async () => {
    console.log(`Rodando o back`)
})



// app.get('/Banner', (req, res) => {   
//     res.json(information)
// })

// app.get('/Skills', (req, res) => {   
//     res.json(skillBarInfo)
// })

// app.get('/About', (req, res) => {   
//     res.json(about)
// })

// app.get('/Portfolio', (req, res) => {   
//     res.json(portfolioImages)
// })

// app.post('/', (req, res) => {
//     const data = req.body.data
//     res.json(data)
// })

// app.put('/', (req, res) => {
//     const data = req.body.data
//     res.json(data)
// })

// app.delete('/:id/:name', (req, res) => {
//     const { id, name } = req.params
//     res.json(`Retorno do delete ${id} e ${name}`)
// })

// app.listen(port, () => {
//     console.log(`Rodando o back`)
// })
