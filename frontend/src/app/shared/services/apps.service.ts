import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../interfaces/chat.type';
import { Files } from '../interfaces/file-manager.type';
import { Mail } from '../interfaces/mail.type';
import { ProjectList } from '../interfaces/project-list.type';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppsService {
  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  public getChatJSON(): Observable<Chat[]> {
    return this.http.get<Chat[]>("./assets/data/apps/chat-data.json")
  }

  public getFileManagerJson(): Observable<Files[]> {
    return this.http.get<Files[]>("./assets/data/apps/file-manager-data.json")
  }

  public getMailJson(): Observable<Mail[]> {
    return this.http.get<Mail[]>("./assets/data/apps/mail-data.json")
  }

  public getProjectListJson(): Observable<ProjectList[]> {
    return this.http.get<ProjectList[]>("./assets/data/apps/project-list-data.json")
  }


  USER_PERMISSIONS = { "slct_in": 0, "insrt_in": 0, "updt_in": 0, "dlte_in": 0, "exprt_in": 0 };



  create(postdata: any, rte: any) {
    return this.http.post(`/${rte}`, { data: postdata });
  }
  put(postdata: any, rte: any) {
    return this.http.put(`/${rte}`, { data: postdata });
  }
  post(postdata: any, rte: string | string[]) {
    if (rte.indexOf("http") > -1) {
      return this.http.post(this.apiUrl+`${rte}`, postdata);
    } else {
      return this.http.post(this.apiUrl+`/${rte}`, postdata);
    }
  }
  get(rte: string | string[]) {
    console.log("GET route ::" + rte)
    if (rte.indexOf("http") > -1) {
      return this.http.get(this.apiUrl+`${rte}`);
    } else {
      return this.http.get(this.apiUrl+`${rte}`);
    }

  }
  update(postdata: any, rte: any) {
    return this.http.put(`/${rte}`, postdata);
  }
  delete(rte: any) {
    return this.http.delete(`/${rte}`);
  }

  getLgnUsrDtls() {
   return new Promise((resolve, reject) => {
      let usr = localStorage.getItem('userdata');
      if (usr) {
        resolve(JSON.parse(usr))
      }
      else {
        reject(null)
      }
    });
  }

}