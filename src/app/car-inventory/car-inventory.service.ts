import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CarModel } from '../shared/car-model.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarInventoryService {
  manufac;
  public carModel: CarModel[] = [];
  public model_data;
  // model = new Subject<CarModel[]>();

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost/miniCarInventory/php/api';

  getReslts() {
    return this.http.get(`${this.configUrl}/model/read.php`)
                      .pipe(map(items => {
                        this.model_data = items;
                        this.carModel = [];
                        for (const item of this.model_data) {
                          // `item` is the array element, **not** the index
                          if(item.count > 0) {
                            this.carModel.push((new CarModel(
                              item.model_name,
                              item.manufacturer_name,
                              item.count,
                              item.model_id
                            )));
                          }
                          // console.log(item.model_name)
                        }
                        return this.carModel.slice();
                      }))
    // return this.carModel.slice();
  }
  // returnModelData() {
  //   return this.carModel.slice();
  // }
  getManufacturers() {
    return this.http.get(`${this.configUrl}/manufacturer/read.php`);
  }

  insertManufacturer(formData) {
    return this.http.post(`${this.configUrl}/manufacturer/insert.php`, { data: formData.value.manufacturer });
  }

  insertModel(formData): Observable<Object> {
    this.manufac = +(formData.value.manufacturer);
    return this.http.post(`${this.configUrl}/model/insert.php`, { model: formData.value.model, count: formData.value.count, manufacturer: this.manufac });
  }

  updateModelCount(modelId): Observable<Object> {
    return this.http.post(`${this.configUrl}/model/update.php`, { data: modelId });
  }
}
