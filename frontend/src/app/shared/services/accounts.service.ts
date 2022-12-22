import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppsService } from './apps.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient,
    private apiService: AppsService) { }

    getAccountHeads(): Observable<any>{
      return this.apiService.get('/account/getAccountHeads').pipe(
        map((response: any) => {
          return response;
        })
      );
    }
    
    createAccountHead(postDataObj: any):Observable<any>{
      return this.apiService.post('/account/createAccountHead', postDataObj).pipe(
        map((response: any) => {
          return response;
        })
      );
    }

    updateAccountHead(id: any, postDataObj: any): Observable<any> {
      return this.apiService.put('/account/updateAccountHead/' + id, postDataObj).pipe(
        map((response: any) => {
          return response;
        })
      );
    }

}
