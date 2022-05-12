import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css']
})
export class VerCursoComponent implements OnInit {
  productoForm: FormGroup;
  id: string | null;
  constructor(private _productoService: ProductoService,
              private aRouter: ActivatedRoute,
              private fb: FormBuilder) {
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

  esEditar(){
    if(this.id !== null){
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
