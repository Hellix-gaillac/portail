window.addEventListener("load", function (event) {
    let buttonUserName = document.getElementById('buttonUser');
    buttonUserName.addEventListener('click', function () {
        let valueInputUserName = document.querySelector('#userName').value; //recuperer value de input
        if (valueInputUserName == "") {
            console.error("erreur de saisi du nom de l'utilisateur");
        }
        else {
            let todoList = new TodoList(valueInputUserName);
            console.warn(todoList);
        }
    });
});
// let buttonTodoList = document.getElementById('addTodo');
//
// buttonTodoList.addEventListener('click', function() {//reagir au click du bouton ajout
//
//   let todo = (document.querySelector('#todoText') as HTMLInputElement).value;
//
//   if (todoList.add(todo) == true) {
//
//     let createLi = document.createElement("LI");//création du  liste dans ol
//     document.body.appendChild(createLi);//placer le input à la fin du html
//     createLi.innerHTML = todo;
//   }
// });
