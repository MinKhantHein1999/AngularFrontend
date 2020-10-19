import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../listing';
import { ListingService } from '../service/listing.service';

@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingComponent implements OnInit {
  listing$ : Observable<Listing>

  constructor(private listingService : ListingService) { }

  ngOnInit() {
    this.listing$ = this.listingService.getAllData();
    console.log(this.listing$)
  }


}
