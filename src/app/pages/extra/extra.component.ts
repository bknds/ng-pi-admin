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
    this.loadData();
  }
  name: string;
  age: number;

  getList;
  save() {
    const data = {
      age: this.age,
      name: this.name,
    }
    this._apiService.post('/posts', data).subscribe(data => {
      this.loadData();
    });
  }

  loadData() {
    this._apiService.get('/posts').subscribe(data => {
      this.getList = data;
    });
  }

  delete(index) {
    this._apiService.delete('/posts', index).subscribe(data => {
    });
  }
}
