// const list = [];
// const input = document.getElementById(elementid = "input");
// const addbutton = document.getElementById(elementid = "button");

// function change(id){
//     const item = list.filter(t => t.id === id)
//     const text = prompt(message = "Change!");
//     list(item).text = text;
//     render();
// }

// function deleteObj(id){
//     const index = list.findIndex(t => )
// }

// function render() {
//     const mainDiv = document.createElement('div');
//     mainDiv.setAttribute('class', 'list');

//     for (let i = 0; i < list.length; i++) {
//         const div = document.createElement('div');
//         div.setAttribute('class', 'todoBlock');
//         const p = document.createElement('p');
//         p.innerText = list[i].text;
//         const list = document.querySelector(selector/list).remove
//         div.append(p);

//         const buttons = document.createElement('div');
//         buttons.setAttribute('class', 'actions');
//         const changeButton = document.createElement('button');
//         changeButton.setAttribute('class', 'change');
//         changeButton.innerText = "change";
//         const deleteButton = document.createElement('button');
//         deleteButton.setAttribute('class', 'delete');
//         deleteButton.innerText = "delete";
//         buttons.append(changeButton, deleteButton);
//         div.append(buttons);
//         mainDiv.append(div);
//     }
//     const form = document.querySelector('.form');
//     form.append(mainDiv);
// }
// addbutton.onclick = function add() {
//     const obj = {
//         id: list.length + 1,//if we use "++" list will longer
//         text: input.value
//     }
//     list.push(obj);
//     render();
// }
const list = [
    {
        id: 1,
        text: "Learn JS!"
    },
    {
        id: 2,
        text: "Learn Python!"
    }
];


function render(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list');

    for(let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p);

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText = "change";
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "delete";
        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div);
    }
    const form = document.querySelector('.form');
    form.append(mainDiv);
}

render()
