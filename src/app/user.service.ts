import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list() : Observable<any> {
    return this.http.get("../assets/results.json");
  }

  async getUserByEmail(email: string) {
    const result = await this.list().toPromise();
    let user = null;
    result.forEach (x => {
      if (x.email == email) {
        user = x;
        return;
      }
    });
    return user;
  }

}
