import {AfterViewInit, Component, Input} from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent implements AfterViewInit {
  avatarImgSrc: string = 'assets/images/avatar.jpg';
  userName: string = 'Bknds';
  userPost: string = 'FrontEnd';


  sidebarToggle: boolean = true;
  tip = {ring: true, email: true};

  constructor(private _globalService: GlobalService) {
  }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }


  ngAfterViewInit(): void {
    this.sidebarToggle = window.innerWidth >= 970;
  }
}
