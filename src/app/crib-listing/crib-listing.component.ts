import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; import { CribsService } from './../services/cribs.service';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(
    private http: Http, 
    private cribsService: CribsService
    ) { }

  ngOnInit() {
    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data, 
        error => this.error = error.statusText
      );

      this.cribsService.newCribSubject.subscribe( //this is where we subscribe our subject
        // data => console.log(data) //if we get the data console.log the data
      // data => this.cribs.push(data) adding at the end of the list
        data => this.cribs = [data, ...this.cribs]
      )   
  }
}
