import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {
  listarCursos: Producto[] = [];

  constructor(private _productoService: ProductoService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(){
    this._productoService.getCursos().subscribe(data => {
      this.listarCursos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarCurso(id: any) {
    this._productoService.eliminarCurso(id).subscribe(data => {
      this.toastr.error('El curso fue eliminado con exito' ,'Curso Eliminado');
      this.obtenerCursos();
    }, error => {
      console.log(error);
    })
  }

}
