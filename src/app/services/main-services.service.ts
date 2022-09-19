import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {

  public baseUrl = "https://jsonplaceholder.typicode.com/users";
  public taskUrl = "https://jsonplaceholder.typicode.com/users/";

  constructor(private httpClient: HttpClient) { }

  gettoken() {
    return !!localStorage.getItem("SeesionUser");
  }

  getEmployeeDetails(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  getEmployeeTask(params?): Observable<any> {
    return this.httpClient.get<any>(`${this.taskUrl + params + '/todos'}`);
  }
}


