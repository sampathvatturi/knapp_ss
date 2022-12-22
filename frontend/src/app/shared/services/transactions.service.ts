import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppsService } from './apps.service';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private apiService: AppsService) { }
  getTransactions(postDataObj: any): Observable<any> {
    return this.apiService.post(postDataObj,'transaction/getTransactions').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createTransaction(postDataObj: any): Observable<any> {
    return this.apiService.post(postDataObj,'transaction/createTransaction' ).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
