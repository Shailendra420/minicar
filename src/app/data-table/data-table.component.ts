import {Component, OnInit, ViewChild} from '@angular/core';
import { CarInventoryService } from '../car-inventory/car-inventory.service';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  manufacturer: string;
  model: string;
  count: number;
}
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns = ['position', 'manufacturer', 'model', 'count', 'actions'];
  dataSource: Object;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  error;
  success;
  inv = [];
  rowRef;
  constructor(private carInventoryService: CarInventoryService) {}

  ngOnInit() {
    this.carInventoryService.getReslts()
    .subscribe((data) => this.dataSource = data);
  }

  sellOneCar(i, paraRef) {
    
    this.error = '';
    this.success = '';
    // console.log(paraRef.currentTarget.parentElement.parentElement);
    // debugger;
  this.rowRef = paraRef.currentTarget.parentElement.parentElement;
    this.carInventoryService.updateModelCount(this.rowRef.id)
    .subscribe(
      (res) => {
        // Update the list of cars
        // this.modelData = res;
        // console.log(this.modelData);

        // Inform the user
        this.success = 'Updated model count successfully';
        this.carInventoryService.getReslts()
        .subscribe(data => {
          // const data = this.dataSource.data;
          // data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
          this.dataSource = data;
          this.dataSource.forEach(element => {
            const data = this.dataSource;
            if(element.model_id === this.rowRef.id && element.count < 1) {
              data.splice((this.paginator.pageIndex * this.paginator.pageSize) + i, 1);
            }
            // console.log(element.model_id);
          });
          // this.dataSource = data;
        });
        // Reset the form
        // form.reset();
      },
      (err) => this.error = err
    ); 
    // console.log(this.dataSource);
    // debugger;
    

    // console.log(this.inv);
    
    // debugger;
    
  }
  // removeAt(index: number) {
  //   const data = this.dataSource;
  //   data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

  //   this.dataSource.data = data;
  // }

}