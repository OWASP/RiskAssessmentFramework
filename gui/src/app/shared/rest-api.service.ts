import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  // Http Options
  httpOptions = {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json'
    // })
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
  runScan(id): Observable<any> {

    return this.http.get<any>(this.apiURL + '/scan/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getResults(id): Observable<Project> {
    return this.http.get<Project>(this.apiURL + '/getResults/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );

  }

  createUser(User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    const body = new HttpParams()
      .set('username', User.username)
      .set('password', User.password)
      .set('email', User.email)
      .set('name', User.name);


    console.log("USER IS", body);
    return this.http.post<User>(this.apiURL + '/users/register', body, httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateUser(id, user): Observable<User> {
    return this.http.put<User>(this.apiURL + '/users/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteUser(id) {
    return this.http.delete<User>(this.apiURL + '/users/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
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
