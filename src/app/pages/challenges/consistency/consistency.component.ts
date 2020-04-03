import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consistency',
  templateUrl: './consistency.component.html',
  styleUrls: ['./consistency.component.scss']
})
export class ConsistencyComponent implements OnInit {
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    console.log('Consistency initialized');
    //console.log(await this.http.get('https://stats.foldingathome.org/api/team/251356').toPromise());
  }
}
