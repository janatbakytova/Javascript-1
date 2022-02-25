let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mass = ["a", "b",]
console.log(array[8])
let obj = {
    username: "Jack",
    followers: [
        {
            username: "John"
        },
        {
            username: "Barbaro"
        },
        {
            username: "Joe"
        },
    ]
};
console.log(obj.followers[1].username)


// ЦИКЛЫ
const array = [
    {
        username: "Jack",
        full_name: "Jack Barbaro"
    },
    {
        username: "Joe",
        full_name: "Joe Barbaro"
    },
    {
        username: "Vito",
        full_name: "Scarlette"
    },
];//object

//for
for (let i = 0; i < array.length; i++) {
    if (i === 2) {
        break;
    }
    else {
        console.log(array[i].username, array[i].full_name);
    }

    //for of
    for (let user of array) {
        console.log(user);
    }

    const obj = {
        key1: "a1",
        key2: "a2",
        key3: "a3",
        key4: "a4",
        key5: "a5",
        key6: "a6",
        key7: "a7",
        key8: "a8",
        key9: "a9",
        key10: "a10",
        username: "John",
        age: 18,
        followers: 10000
    };
    delete obj.key2; // удалить

    for (let key in obj) {
        delete obj[key]; // удалить все
    }

    console.log(obj.key1);
    console.log(obj.key2);
    console.log(obj.key3);
    console.log(obj.key4);
    console.log(obj.key5);

    for (let key in obj) {
        console.log(obj["key"]); // variant 1
        console.log(key + ": " + obj[key]); //variant 2
    };

    let i = 0;
    console.log(i);
    i++;
    i++;
    i++;

    console.log(array[0].username, array[0].full_name);
    console.log(array[1].username, array[1].full_name);
    console.log(array[2].username, array[2].full_name);

    //while
    let i = 0;

    while (i < 5) {
        console.log("Hello!");
        i++;
    }//true, infinity cause "i++"//



    const users = [
        {
            username: "Jack",
            salary: 500
        },
        {
            username: "Joe",
            salary: 5000
        },
        {
            username: "Vito",
            salary: 10000
        },
    ];
    console.log(users);



    const filteredUsers = [];
    for (let user of users) {
        if (user.salary > 500) {
            filteredUsers.push(user);
        }
    }
    console.log(filteredUsers);



    const filteredUsers = users.filter(user => user.salary > 500);
    console.log(filteredUsers);


    const destructUsers = [];
    for (let user of users) {
        destructUsers.push({
            name: user.username,
            salary: user.salary
        })
    }
    console.log(destructUsers);//rename


    const destructUsers = users.map(user => ({
        name: user.username,
        salary: user.salary
    }));

    console.log(destructUsers);


    users.forEach(user => {
        console.log(user)
    })

    for (let user of users) {
        console.log(user);
    }