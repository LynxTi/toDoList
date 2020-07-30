class ToDoList {
    constructor(){
        this.createrNewTask = document.querySelector('.header__newTask');
        this.content = document.querySelector('.content');
        
        this.createrNewTask.addEventListener('click', this.onClickNewTask);

    }

    onClickNewTask = () => {
        const task = new Task('her',this.content);
    }
}

class Task{
    constructor(value, content){
        content.innerHTML =`<div class="content__task">
        <i class="far fa-circle isDone"></i>
        <div class="content__inputUserTask"><span>${ value }</span></div>
        <div class="content__editMenu"></div>
        </div>`+ content.innerHTML;
    }
}

const toDoList = new ToDoList();