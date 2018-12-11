import {Component, OnInit, ViewChild} from '@angular/core';
import { CarInventoryService } from '../car-inventory/car-inventory.service';
import { MatPaginator } from '@angular/material/paginator';
import { CarModel } from '../shared/car-model.model';

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
  dataSource: CarModel[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  error;
  rowRef;
  constructor(private carInventoryService: CarInventoryService) {}

  ngOnInit() {
    this.carInventoryService.getReslts()
    .subscribe((data) => {
      // console.log(this.dataSource);
      // console.log(data);
      this.dataSource = data;
    });
  }

  sellOneCar(i, paraRef) {
    
    this.error = '';
    
    this.rowRef = paraRef.currentTarget.parentElement.parentElement;
    this.carInventoryService.updateModelCount(this.rowRef.id)
    .subscribe(
      (res) => {
        // this.success = 'Updated model count successfully';
        this.carInventoryService.getReslts()
        .subscribe(data => {
          
          this.dataSource = [];
          this.dataSource = data;
          
          const m_data = this.dataSource;
          this.dataSource.forEach(element => {
            if(element.model_id === this.rowRef.id && element.count < 1) {
              m_data.splice((this.paginator.pageIndex * this.paginator.pageSize) + i, 1);
            }
          });
        });
      },
      (err) => this.error = err
    ); 
   
  }
}