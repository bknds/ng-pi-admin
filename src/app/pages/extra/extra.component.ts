import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss'],
  providers: [ApiService]
})
export class ExtraComponent implements OnInit {

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.get('/posts').subscribe(data => {
      console.log(data);
    });
  }

}
