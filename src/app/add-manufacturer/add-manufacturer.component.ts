import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarInventoryService } from '../car-inventory/car-inventory.service';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})
export class AddManufacturerComponent implements OnInit {
  @ViewChild('disappear') flashMessage: ElementRef;
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
        console.log(res);
        // Inform the user
        this.success = 'Created successfully';
        setTimeout(() => {
          this.success = "";
        },3000);

        // Reset the form
        form.reset();
      },
      (err) => {
        this.error = err;
        setTimeout(() => {
          this.error = "";
        },3000);
      }
    );
    
  }
}
