require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60253158902ef6845a72021d').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false })
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=> {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5026eebe2c39a690808fed8d').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
