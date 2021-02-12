require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('60253158902ef6845a72021d').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false })
}).then((result)=>{
    console.log(result)
}).catch((e)=> {
    console.log(e)
})
