const express = require('express')
const app = express()
const stu = require('./Routes/stu')
// app.use(stu)
app.use('/stu',stu)

app.listen(3000 , (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('server is running ...');
    }
})