import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { AllListingComponent } from './all-listing/all-listing.component';
import { MaterialModule } from '../material/material.module';
import { DetailsListingComponent } from './details-listing/details-listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AllListingComponent, DetailsListingComponent, AddListingComponent],
  imports: [
    CommonModule,
    ListingRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ListingModule { }
