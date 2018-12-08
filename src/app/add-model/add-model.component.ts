import { Component, OnInit } from '@angular/core';
import { CarInventoryService } from '../car-inventory/car-inventory.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
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

        // Reset the form
        form.reset();
      },
      (err) => this.error = err
    );
  }
}
