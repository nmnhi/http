import { HttpServerService } from './../Services/http-server.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user.model';
import { Item } from '../Model/item.model';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
})
export class GetDataComponent implements OnInit {
  constructor(private httpServices: HttpServerService) {}
  listData: Item[] = [];
  listUser: User[] = [];
  public ngOnInit(): void {
    this.httpServices.getComments().subscribe((data) => {
      this.listData = data;
      console.log(this.listData);
    });
    this.httpServices.getRandomUSers(10).subscribe((data) => {
      this.listUser = data;
      console.log(this.listUser);
    });
  }
}
