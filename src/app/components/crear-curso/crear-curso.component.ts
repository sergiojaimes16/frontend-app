import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = "Crear Curso";
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _productoService: ProductoService,
              private toastr: ToastrService,
              private aRouter: ActivatedRoute) { 
      this.productoForm = this.fb.group({
        nombre: ['', Validators.required],
        tutor: ['', Validators.required],
        temas: ['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){

    const CURSOS: Producto = {
      nombre: this.productoForm.get('nombre')?.value,
      tutor: this.productoForm.get('tutor')?.value,
      temas: this.productoForm.get('temas')?.value
    }

    if(this.id !== null){
      // editamos producto
      this._productoService.editarCurso(this.id, CURSOS).subscribe(data => {
        this.toastr.info('El curso fue actualizado con exito!', 'Curso Actualizado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
    })
    } else {
      // agregamos producto
      console.log(CURSOS);
      this._productoService.guardarCurso(CURSOS).subscribe(data => {
        this.toastr.success('El curso fue registrado con exito!', 'Curso Registrado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
    })
    }
    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Curso';
      this._productoService.obtenerCurso(this.id).subscribe(data => {
        this.productoForm.setValue({
          nombre: data.nombre,
          tutor: data.tutor,
          temas: data.temas
        })
      })
    }
  }

}
