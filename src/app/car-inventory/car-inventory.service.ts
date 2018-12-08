import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarInventoryService {
  manufac;

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost/miniCarInventory/php/api';

  getReslts() {
    return this.http.get(`${this.configUrl}/model/read.php`);
  }

  getManufacturers() {
    return this.http.get(`${this.configUrl}/manufacturer/read.php`);
  }

  insertManufacturer(formData): Observable<Object> {
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
