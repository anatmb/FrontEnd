import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string;
  imgproyecto: string;
  linkproyecto: string;
  

  constructor(private proyectoS: ProyectoService, 
    private router: Router,
    private activatedRouter : ActivatedRoute, 
    public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombre, this.imageService.url, this.linkproyecto);
    console.log(proyecto.imgproyecto);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    const id= this.activatedRouter.snapshot.params['id'];
    let name;

    if(id){
       name = "Proyecto_" + id;
    }else{
      name = "Proyecto_" + this.imageService.generateUUID();
    }
   
     this.imageService.uploadImage($event,name)

  }
}