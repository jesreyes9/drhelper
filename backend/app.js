const express=require('express')
const cors=require('cors')
require('./db')
const router = require('./routes/routes')

const app=express()

app.use(cors())
app.use(express.json())
app.use(router)

const port=process.env.PORT || 3000



app.listen(port,()=>{
    console.log('Listening on port '+port)
})