import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'; //library that let us use observables in angular app

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllCribs(){
    return this.http.get('data/cribs.json').map(res => res.json());
  } //returns observables and because of that we can subscribe them results (look in crib-listing)

  addCrib(data){
    data.image = 'default-crib';
    this.newCribSubject.next(data); //whenever the data will come from the addCrib method; whenever button is clicked and 
    //this method is called send data to this Subject

  }
}
