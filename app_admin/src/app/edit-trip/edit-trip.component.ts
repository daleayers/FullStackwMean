import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  tripCode: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // retrieve stashed tripId
    this.tripCode = localStorage.getItem('tripCode');
    if (!this.tripCode) {
      alert("Something's wrong. Couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log(`EditTripComponent#onInit found tripCode ${this.tripCode}`);

    // initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: [this.tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    console.log(`EditTripComponent#onInit calling TripDataService#getTrip('${this.tripCode}')`);
    this.tripService.getTrip(this.tripCode)
      .then(data => {
        console.log(data);
        // update form values
        this.editForm.patchValue(data[0]);
      })
      .catch(error => {
        console.error(error);
        alert('Something went wrong while fetching trip data.');
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value)
        .then(data => {
          console.log(data);
          this.router.navigate(['']);
        })
        .catch(error => {
          console.error(error);
          alert('Something went wrong while updating the trip.');
        });
    }
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}