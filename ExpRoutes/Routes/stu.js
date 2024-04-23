const express = require('express')
const router = express.Router()
// router.get('/stu/list',(req,res)=>{
//     console.log('here is stu list');
//     res.end('<h1> I am fetching stu list ... </h1>')
// })
// router.get('/stu/attendance',(req,res)=>{
//     console.log('here is stu list');
//     res.end('<h1> I am fetching stu list ... </h1>')
// })
// router.get('/stu/admitcard',(req,res)=>{
//     console.log('here is stu list');
//     res.end('<h1> I am fetching stu list ... </h1>')
// })
// router.get('/stu/icard',(req,res)=>{
//     console.log('here is stu list');
//     res.end('<h1> I am fetching stu list ... </h1>')
// })

router.get('/list',(req,res)=>{
    console.log('here is stu list');
    res.end('<h1> I am fetching stu list ... </h1>')
})
router.get('/attendance',(req,res)=>{
    console.log('here is stu attendance');
    res.end('<h1> I am fetching stu attendance ... </h1>')
})
router.get('/admitcard',(req,res)=>{
    console.log('here is stu admitcard');
    res.end('<h1> I am fetching stu admitcard ... </h1>')
})
router.get('/icard',(req,res)=>{
    console.log('here is stu icard');
    res.end('<h1> I am fetching stu icard ... </h1>')
})
module.exports = router