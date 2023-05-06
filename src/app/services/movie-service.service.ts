import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY, BANNER, BASE_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getSearch(search: any): Observable<any> {
    return this.http.get(`${BASE_URL}/search/movie?${API_KEY}&query=${search}`)
  }

  getTrendingWeek(): Observable<any> {
    return this.http.get(`${BASE_URL}/trending/all/week?${API_KEY}`);
  }

  getGenreThriller(): Observable<any> {
    return this.http.get(`${BASE_URL}/discover/movie?${API_KEY}&with_genres=53`)
  }

  getGenreAction(): Observable<any> {
    return this.http.get(`${BASE_URL}/discover/movie?${API_KEY}&with_genres=28`)
  }

  getGenreAdventure(): Observable<any> {
    return this.http.get(`${BASE_URL}/discover/movie?${API_KEY}&with_genres=12`)
  }

  getGenreAnimation(): Observable<any> {
    return this.http.get(`${BASE_URL}/discover/movie?${API_KEY}&with_genres=16`)
  }

  getGenreSciFi(): Observable<any> {
    return this.http.get(`${BASE_URL}/discover/movie?${API_KEY}&with_genres=878`)
  }

  getGenreComedy(): Observable<any> {
    return this.http.get(`${BASE_URL}/discover/movie?${API_KEY}&with_genres=35`)
  }
}
