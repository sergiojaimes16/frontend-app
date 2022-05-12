import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/cursos/';

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarCurso(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarCurso(curso: Producto): Observable<any>{
    return this.http.post(this.url, curso);
  }

  obtenerCurso(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarCurso(id: string, curso: Producto): Observable<any> {
    return this.http.put(this.url + id, curso);
  }
}
