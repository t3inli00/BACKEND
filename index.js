
require('dotenv').config()
//import 'dotenv/config'
const express = require('express')
const cors = require('cors')

const { todoRouter } = require('./routes/todo.js')
//const { query } = require('./helpers/db')

//const { Pool } = require('pg')
const app = express()
app.use(cors())
const port = process.env.PORT 
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/',todoRouter)
//const port = process.env.PORT

// app.get("/",async (req,res) => {
//     try{
//         const result = await query('select * from task')
//         const rows =result.rows ? result.rows : []
//         res.status(200).json(rows)
//     }catch (error){
//         console.log(error)
//         res.statusMessage =error
//         res.status(500).json({error: error})
//     }
// })

// app.delete("/delete/:id",async(req,res) => {
    
//     const id =parseInt(req.params.id)
//     try{
//         const result =await query('delete from task where id = $1' ,[id])
//         res.status(200).json({id:id})
//     } catch (error) {
//         console.log(error)
//         res.statusMessage =error
//         res.status(500).json({error: error})
//     }
    
// })

// app.post("/new",async(req,res) =>{
// try{
//     const result =await query('insert into task(description) values ($1) returning *',[req.body.description])
//     res.status(200).json({id:result.rows[0].id})
// } catch (error){
//     console.log(error)
//     res.statusMessage =error
//     res.status(500).json({error: error})
// }
    
// })

    
app.listen(port)