import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private  httpClient: HttpClient) { }

  getUser() {
    return  this.httpClient.get(`${environment.APIEndpoint}`);
  }
}
