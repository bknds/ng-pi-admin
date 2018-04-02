import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = 'Folisise Chosielie';
  userPost: string = 'Musician, Player';
  userDesc: string = 'Lorem ipsum dolor uaerat nisi tenetur minima itaque repellat consectetur laborum.';
  
  constructor() { }

  ngOnInit() {
  }

}
