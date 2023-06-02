import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  //url
  private url = 'https://football98.p.rapidapi.com/premierleague/news';
  // 'https/spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';

  constructor(private http: HttpClient) {}

  // params = new HttpParams({
  //   fromString: '2w9zwq3AktTeYYMuhMjju8',
  // });

  headers = new HttpHeaders({
    'X-RapidAPI-Key': 'd444d656d4msh6b1dfdf4cdb57ffp1cd003jsn1703cd5cc0e8',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com',
  });

  getPosts() {
    return this.http.get<any>(this.url, {
      headers: this.headers,
    });
  }
}
