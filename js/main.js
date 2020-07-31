

class ToDoList {
    constructor(){
        this.createrNewTask = document.querySelector('.header__newTask');
        this.content = document.querySelector('.content');
        this.inputWrapper = document.querySelector('.content__inputWrapper');

        this.createrNewTask.addEventListener('click', this.onClickNewTask);
        this.content.addEventListener('click', this.onClickButton);
    }

    onClickNewTask = () => {
        const inputWrappert = `<div class="content__inputWrapper">
        <button class="content__close">X</button>
        <input type="text" class="content__inputUserValue">
        <button class="content__userValueBotton">OK</button>
        </div>`;
        this.content.innerHTML = inputWrappert + this.content.innerHTML;

        // this.inputWrapper.style.display = 'flex';
        console.log(this);
        document.querySelector('.content__userValueBotton').addEventListener('click',this.onClickUserValueBotton);
        
    }

    onClickUserValueBotton = () => {
        const userInputValue = document.querySelector('.content__inputUserValue');
        const userValue = userInputValue.value; 

        if (userValue !==''){
            const task = new Task(userValue,this.content);

            // userInputValue.value = '';
            // console.log(this.inputWrapper.style.display);
            document.querySelector('.content__inputWrapper').remove();;
            // console.log(this.inputWrapper);
        console.log(this);

        }
    }

    onClickButton = (e) => {
        const botton = document.querySelector('.isDone');
        console.log(e.target);
        console.log(e.target.classList);

        if (e.target.classList[2] == 'isDone'){
            e.target.parentNode.remove();
        }
    }
}

class Task{
    constructor(value, content){
        this.contenttTask =`<div class="content__task">
        <i class="far fa-circle isDone"></i>
        <div class="content__inputUserTask"><span>${ value }</span></div>
        <div class="content__editMenu"></div>
        </div>`;

        content.innerHTML  = this.contenttTask + content.innerHTML;
        
        // document.querySelector(`.isDone`).addEventListener('click',this.onClickButton)
    }

    onClickButton = (e) => {
        console.log(this);
        e.target.parentNode.remove();
    }
}

const toDoList = new ToDoList();

// class TestAjax {
//     constructor
// }

// const ajax = new XMLHttpRequest();

// ajax.onreadystatechange = () => {
//     console.log(ajax.readyState, ajax.status);
//     console.log(ajax.responseText);
// }

// ajax.open('GET', 'localhost'. true);

// ajax.send();