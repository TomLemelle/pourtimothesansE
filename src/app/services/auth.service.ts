import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {takeLast, map, catchError, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connected: boolean = false;

  constructor(
    private _httpClient: HttpClient,
    private router: Router
  ) { }

  public isConnected():boolean {
    return this.connected;
  }

  public authenticate(login: string, password: string): Observable<any> {
    return this._httpClient.get(`api/users?login=${login}&password=${password}`)
      .pipe(
        takeLast(10),
        map(value => {
          if(value) {
            this.router.navigate(['pages']);
            this.connected = true;
          }
        }
      ),
      catchError((err, caught) => {
        console.error(err);
        this.router.navigate(['404']);
        this.connected = true;
        return caught;
      })
    );
  }
}
