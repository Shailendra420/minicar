import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CarInventoryService } from '../car-inventory/car-inventory.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
  @ViewChild('disappear') flashMessage: ElementRef;
  results: Object;
  error;
  success;
  modelData: Object;
  constructor(private carInventoryS: CarInventoryService) { }

  ngOnInit() {
    this.carInventoryS.getManufacturers()
    .subscribe((data) => this.results = data);
  }

  addModel(form: NgForm) {
    this.error = '';
    this.success = '';
    // console.log(form);
    this.carInventoryS.insertModel(form)
    .subscribe(
      (res) => {
        // Update the list of cars
        this.modelData = res;
        console.log(this.modelData);

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
