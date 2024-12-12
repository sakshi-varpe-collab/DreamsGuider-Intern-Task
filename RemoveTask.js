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

var remove= {
    "Id":3,
    "Description":"Java Developer",
    "Priority":"Low"
}

task.pop(remove);
console.log(task);

var removeTask=task.splice(0,1);
console.log(removeTask);
console.log(task);