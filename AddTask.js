var task=[
    {
        "Id":1,
        "Description":"Web Developer",
        "Priority":"High"
    },
    {
        "Id":2,
        "Description":"Frontend Developer",
        "Priority":"Medium"
    },
    {
        "Id":3,
        "Description":"Java Developer",
        "Priority":"Low"
    }
]

var NewTask=task.splice(0,0,[
    {
    "Id":1.1,
    "Description":"Database Administrator",
    "Priority":"Medium"
},
])

// console.log(NewTask);
console.log(task);

