import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionService {
  constructor(private http: HttpClient) {}

  getPfes() {
    return this.http.get('http://localhost:8080/pfes');
  }

  getTypes() {
    return this.http.get('http://localhost:8080/types');
  }
  getPfeByType(id: number) {
    return this.http.get('http://localhost:8080/pfebytype/' + id);
  }
  getPfesBytitre(titre: string) {
    return this.http.get('http://localhost:8080/PfesBytitre/' + titre);
  }

  Add(pfe: any) {
    return this.http.post('http://localhost:8080/save', pfe);
  }
  delete(id: number) {
    return this.http.get('http://localhost:8080/delete/' + id);
  }
}
