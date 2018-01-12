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
    this.todolist.forEach(element => {
      element.isOver = false;
      element.isEdit = false;
    });
  }

  edit(index) {
    if (!this.todolist[index].isOver) {
      this.todolist[index].isEdit = true;
    }
  }

  overMatter(index) {
    if (!this.todolist[index].isEdit) {
      this.todolist[index].isOver = !this.todolist[index].isOver;
    }
  }

  updataTaskDetail(index) {
    this.todolist[index].isEdit = false;
  }

  creatNewTask() {
    let newTask = new List;
    newTask.isEdit = false;
    newTask.isOver = false;
    newTask.text = this.newTaskText;
    this.todolist.unshift(newTask);
  }

}
export class List {
  text: string;
  isOver: boolean;
  isEdit: boolean;
}
