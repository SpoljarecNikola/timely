import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from './session';
import { SessionRequest } from './sessionRequest';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessionsUrl: string;

  constructor(private http: HttpClient) {
    this.sessionsUrl = 'http://localhost:8080/session';
  }

  public findAll(): Observable<SessionRequest[]> {
    return this.http.get<SessionRequest[]>(this.sessionsUrl);
  }

  public save(session: SessionRequest) {
    return this.http.post<SessionRequest>(this.sessionsUrl, session);
  }

  public deleteSession(id: any){
    return this.http.delete(this.sessionsUrl + '/' + id);
  }

  public updateSession(sessionn: SessionRequest){
    return this.http.put(this.sessionsUrl, sessionn);
  }
}
