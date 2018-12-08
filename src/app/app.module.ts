import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarInventoryService } from './car-inventory/car-inventory.service';
import { AddManufacturerComponent } from './add-manufacturer/add-manufacturer.component';
import { HeaderComponent } from './header/header.component';
import { AddModelComponent } from './add-model/add-model.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [
    AppComponent,
    AddManufacturerComponent,
    HeaderComponent,
    AddModelComponent,
    DropdownDirective,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule 
  ],
  providers: [CarInventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
