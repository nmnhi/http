import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/user.model';
import { Item } from '../Model/item.model';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USERS = 'https://randomuser.me/api/?results=';
  private REST_API_SERVER_PRODUCTS =
    'https://angularbyprocademy-36afc-default-rtdb.firebaseio.com/products';

  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  public getComments(): Observable<Item[]> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<Item[]>(url, this.httpOption);
  }
  public getRandomUSers(users: number): Observable<User[]> {
    const url = `${this.REST_API_SERVER_RANDOM_USERS}${users}`;
    return this.httpClient.get<User[]>(url, this.httpOption).pipe();
  }
}
