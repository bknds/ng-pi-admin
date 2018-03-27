import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todolist.service';
@Component({
  selector: 'du-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  providers: [TodoListService]
})

export class TodolistComponent implements OnInit {

  todolist: Array<any> = [];
  newTaskText: string;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todolist = this.todoListService.getTodoList();
    this.todolist.forEach(item => {
      item.isOver = false;
      item.isEdit = false;
      item.editText = item.text;
    });
  }

  edit(index) {
    if (!this.todolist[index].isOver) {
      this.todolist[index].editText = this.todolist[index].text;
      this.todolist[index].isEdit = true;
    }
  }

  overMatter(index) {
    if (!this.todolist[index].isEdit) {
      this.todolist[index].isOver = !this.todolist[index].isOver;
    }
  }

  enterTaskEdit(index) {
    this.todolist[index].text = this.todolist[index].editText;
    this.todolist[index].isEdit = false;
  }

  cancelTaskEdit(index) {
    this.todolist[index].isEdit = false;
  }

  creatNewTask() {
    const newTask = new List;
    newTask.isEdit = false;
    newTask.isOver = false;
    newTask.text = this.newTaskText;
    this.todolist.unshift(newTask);
  }

}
export class List {
  text: string;
  editText: string;
  isOver: boolean;
  isEdit: boolean;
}
