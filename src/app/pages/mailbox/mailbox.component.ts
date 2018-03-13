import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function* helloWorldGenerator() {
      console.log("2");
      yield 'bbb';
      console.log("1");
      yield 'aaa';
      return 'ending';
    }
    var ge = helloWorldGenerator();

    ge.next()
    this.aaa();
    ge.next()
  }

  aaa() {
    console.log("3");
  }

}
