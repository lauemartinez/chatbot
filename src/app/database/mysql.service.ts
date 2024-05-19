import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {
  private apiUrl = environment.backendUrl;
  
  constructor(private http: HttpClient) {}

  getData(sql_query: string) {
    return this.http.post<any>(this.apiUrl, {'sql_query': sql_query});
  }
}