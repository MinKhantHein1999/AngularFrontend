import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/guard/auth.guard';
import { AddListingComponent } from './add-listing/add-listing.component';
import { AllListingComponent } from './all-listing/all-listing.component';
import { DetailsListingComponent } from './details-listing/details-listing.component';

const routes: Routes = [
  { path: '', component: AllListingComponent },
  { path: 'add-listing', component: AddListingComponent, canActivate : [AuthGuard] },
  { path: ':id', component: DetailsListingComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
