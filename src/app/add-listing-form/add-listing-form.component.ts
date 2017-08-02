import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-listing-form', //add to app.template
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  constructor() { }

  ngOnInit() {
  }

  onCribSubmit(data): void { //void - not returning anything from these method
    console.log(data); 
  }
}
