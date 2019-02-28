import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private HttpClient: HttpClient) { }


  post(Contact: Contact): Observable<object> {
    return this.HttpClient.post('http://localhost:8888/contact', Contact);

  }

}