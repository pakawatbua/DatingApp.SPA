import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User } from '../_models/Model';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/internal/operators';

@Injectable()

export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: Http) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.baseUrl + 'users', this.jwt())
      .map(reponse => <User[]>reponse.json());
  }

  private jwt() {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new Headers({'Authorization': 'Bearer ' + token});
      headers.append('Content-type', 'application/json');
      return new RequestOptions({headers: headers});
    }
  }

  // TODO HANDLE ERROR
  private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = '';
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }
    return Observable.throw(
      modelStateErrors || 'Server error'
    );
  }
}
