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
    },
        {
            "Id":4,
            "Description":"Web Applications",
            "Priority":"High"
        },
        {
            "Id":5,
            "Description":"Python Developer",
            "Priority":"Medium"
        },
        {
            "Id":6,
            "Description":"Backend Developer",
            "Priority":"Low"
        }
    ]


var filterTask=task.filter(elem=>elem.Priority.includes('High'));
console.log(filterTask);