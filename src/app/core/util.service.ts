import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class UtilService {
  constructor(
    private http: HttpClient
  ) {}
  getComments(): Observable<any> {
    return this.http.get('assets/file/comments.json').pipe(map(res => res));
  }
}

