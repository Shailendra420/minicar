import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddManufacturerComponent } from './add-manufacturer/add-manufacturer.component';
import { AddModelComponent } from './add-model/add-model.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/manufacturer', pathMatch: 'full' },
  { path: 'manufacturer', component: AddManufacturerComponent },
  { path: 'model', component: AddModelComponent },
  { path: 'datatable', component: DataTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
