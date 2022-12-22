import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppsService } from './apps.service';

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(private http: HttpClient,
    private apiService: AppsService
  ) { }

  getFunds(): Observable<any> {
    return this.apiService.get('/fund/getFunds').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createFund(postDataObj: any): Observable<any> {
    return this.apiService.post('/fund/createFund', postDataObj).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateFund(id: any, postDataObj: any): Observable<any> {
    return this.apiService.put('/fund/updateFund/' + id, postDataObj).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getFundById(id: any): Observable<any> {
    return this.apiService.get('/fund/getFundById' + id).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
