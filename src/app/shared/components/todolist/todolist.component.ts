import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'du-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todolist: Array<any> = [
    { text: 'This is first need todo thing!', isOver: true, isEdit: false },
    { text: 'This is first need todo thing!', isOver: true, isEdit: false },
    { text: 'This is first need todo thing!', isOver: true, isEdit: false },
    { text: 'This is first need todo thing!', isOver: false, isEdit: false },
    { text: 'This is first need todo thing!', isOver: false, isEdit: false },
    { text: 'This is second need todo thing!', isOver: false, isEdit: false },
    { text: 'This is third need todo thing!', isOver: false, isEdit: false },
    { text: 'This is third need todo thing!', isOver: false, isEdit: false },
    { text: 'This is third need todo thing!', isOver: false, isEdit: false },
  ];

  constructor() { }

  ngOnInit() { }

  edit(index) {
    if (!this.todolist[index].isOver) {
      this.todolist[index].isEdit = true;
    }
  }

  overMatter(index) {
    this.todolist[index].isOver = !this.todolist[index].isOver;
  }

  addNewList() {
    let newList = new List;
    //newList添加属性值
    newList.id = this.todolist.length + 1;
    newList.isEdit = true;
    newList.isOver = false;
    newList.text = '';
    this.todolist.unshift(newList);
  }

  saveAs(index) {
    this.todolist[index].isEdit = false;
  }
}
export class List {
  id: number;
  text: string;
  isOver: boolean;
  isEdit: boolean;
}
