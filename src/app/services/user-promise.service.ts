import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { RoutesAPI } from '../util/routes-api';

@Injectable({
  providedIn: 'root',
})
export class UserPromiseService {
  URL = `${RoutesAPI.USERS}`;
  URL_PT = `${RoutesAPI.USERS_PT}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getByUsername(username: string): Promise<User[]> {
    return this.httpClient
      .get<User[]>(`${this.URL_PT}/${username}`)
      .toPromise();
  }

  save(user: User): Promise<User> {
    return this.httpClient
      .post<User>(this.URL, JSON.stringify(user), this.httpOptions)
      .toPromise();
  }

  patch(user: User): Promise<User> {
    return this.httpClient
      .patch<User>(
        `${this.URL}/${user.id}`,
        JSON.stringify(user),
        this.httpOptions
      )
      .toPromise();
  }

  update(user: User): Promise<User> {
    return this.httpClient
      .put<User>(
        `${this.URL}/${user.id}`,
        JSON.stringify(user),
        this.httpOptions
      )
      .toPromise();
  }
}
