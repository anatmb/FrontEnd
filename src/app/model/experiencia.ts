export class Experiencia {
    id?: number;
    nombreE: string;
    periodoE: string;
    descripcionE: string;

    constructor(nombreE:string, periodoE: string, descripcionE:string) {
        this.nombreE = nombreE;
        this.periodoE = periodoE;
        this.descripcionE = descripcionE;
}
}