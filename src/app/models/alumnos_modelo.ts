export class Alumno {
 id: number;
 nombre: string;
 apellido: string;
 fecha_nacimiento: Date;
 aprobado: boolean;
    
constructor(
        id: number,
        nombre: string,
        apellido: string,
        fecha_nacimiento: Date,
        aprobado: boolean
    ){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.aprobado = aprobado;
    }
}
