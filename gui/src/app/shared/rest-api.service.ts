import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../auth/user.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch Users list
  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/users')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch User
  getUser(id): Observable<User> {
    return this.http.get<User>(this.apiURL + '/users/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getResults(id): Observable<Project>{
    return this.http.get<Project>(this.apiURL + '/getResults/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  // HttpClient API post() method => Create User
  createUser(User): Observable<User> {
    return this.http.post<User>(this.apiURL + '/users', JSON.stringify(User), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update User
  updateUser(id, User): Observable<User> {
    return this.http.put<User>(this.apiURL + '/users/' + id, JSON.stringify(User), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete User
  deleteUser(id){
    return this.http.delete<User>(this.apiURL + '/users/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }


}
