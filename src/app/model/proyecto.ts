export class Proyecto {

    id?: number;
    nombre: string;
    linkproyecto: string;
    imgproyecto: string;

    constructor(
        nombre: string,
        imgproyecto: string,
        linkproyecto: string
      ) {
        this.nombre = nombre;
        this.imgproyecto = imgproyecto;
        this.linkproyecto = linkproyecto;
        
      }

}
