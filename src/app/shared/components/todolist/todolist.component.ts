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

  saveAs(index) {
    this.todolist[index].isEdit = false;
  }
  
  addNewList() {
    let newList = new List;
    newList.isEdit = true;
    newList.isOver = false;
    newList.text = '';
    this.todolist.unshift(newList);
  }

}
export class List {
  text: string;
  isOver: boolean;
  isEdit: boolean;
}
