import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
nombreE: string;
imgE:string;
descripcionE: string;

  constructor(private educacionS: EducacionService, 
              private activatedRouter : ActivatedRoute, 
              private router: Router,
              public imageService: ImageService){}

  ngOnInit(): void {
   
  }
           
  
  onCreate():void {
     const educacion= new Educacion(this.nombreE, this.imageService.url, this.descripcionE);
     this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida corectamente");
        this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
     )
    }

    uploadImage($event: any){
      const id= this.activatedRouter.snapshot.params['id'];
      let name;
      if(id){
        name = "Educacion_" + id;
     }else{
       name = "Educacion_" + this.imageService.generateUUID();
     }
       this.imageService.uploadImage($event,name)
  
    }
  
}