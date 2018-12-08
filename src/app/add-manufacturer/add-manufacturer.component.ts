import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarInventoryService } from '../car-inventory/car-inventory.service';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})
export class AddManufacturerComponent implements OnInit {
  error;
  success;
  constructor(private carInventoryS: CarInventoryService) { }

  ngOnInit() {
  }

  addManufacturer(form: NgForm) {
    this.error = '';
    this.success = '';
    this.carInventoryS.insertManufacturer(form)
    .subscribe(
      (res) => {
        // Update the list of cars
        // this.cars = res;

        // Inform the user
        this.success = 'Created successfully';

        // Reset the form
        form.reset();
      },
      (err) => this.error = err
    );
    // setTimeout(() => {
    //   this.success = null;
    // },3000);
  }
}
