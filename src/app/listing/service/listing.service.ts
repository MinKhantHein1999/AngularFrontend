import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Listing } from '../listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
    private base_Url = "https://radiant-anchorage-40000.herokuapp.com/api/crud";

    private httpOptions = {
      headers : new HttpHeaders().set('Content-Type','application/json').set('auth-token', localStorage.getItem('token'))
    }
  constructor(private http$ : HttpClient) { }

  getAllData():Observable<Listing>{
    return this.http$.get<any>(this.base_Url);
  }

  getDetails(id: String) {
    return this.http$.get<Listing>(`${this.base_Url}/${id}`);
  }

  addListing(listing) {
    return this.http$.post<any>(`${this.base_Url}`, listing, this.httpOptions);
  }

  editListing(listing, id: String){
    return this.http$.put<any>(`${this.base_Url}/${id}`,listing,this.httpOptions)
  }

  deleteListing(id: String){
    return this.http$.delete<any>(`${this.base_Url}/${id}`,this.httpOptions)
  }
}
