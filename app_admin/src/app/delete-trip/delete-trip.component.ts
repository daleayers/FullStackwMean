import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  deleteForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // retrieve stashed tripId
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('DeleteTripComponent#onInit found tripCode ' + tripCode);

    // set up deleteForm with trip ID and trip name fields
    this.deleteForm = this.formBuilder.group({
      tripId: [tripCode, Validators.required],
      tripName: ['', Validators.required]
    });
    
    console.log('DeleteTripComponent#onInit calling TripDataService#getTrip(\'' + tripCode + '\')');

    this.tripService.getTrip(tripCode)
      .then(data => {
        console.log(data);
        // populate trip name field with data from the server
        this.deleteForm.patchValue({
          tripName: data[0].name
        });
      })
      .catch(error => {
        console.log(error);
        this.errorMessage = 'An error occurred while retrieving trip data.';
      });
   }

  onSubmit() {
    this.submitted = true;

    if (this.deleteForm.valid) {
      let tripId = this.deleteForm.value.tripId;

      this.tripService.deleteTrip(tripId)
        .then(data => {
          console.log(data);
          this.router.navigate(['']);
        })
        .catch(error => {
          console.log(error);
          this.errorMessage = 'An error occurred while deleting the trip.';
        });
    }
   }
   public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

}