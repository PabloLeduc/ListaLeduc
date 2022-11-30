import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumnos_modelo';

@Component({
  selector: 'app-alumnos-pages',
  templateUrl: './alumnos-pages.component.html',
  styleUrls: ['./alumnos-pages.component.css']
})
export class AlumnosPagesComponent implements OnInit {

  Alumnos: Alumno[] = [
    new Alumno(1,'Franco','Perez',new Date('2022-07-25'),true),
    new Alumno(2,'Pablo','kiu',new Date('2022-09-08'),true),
    new Alumno(3,'Walter','Goku',new Date('2022-01-25'),false),
    new Alumno(4,'Belen','Picachu',new Date('2022-07-24'),true),
    new Alumno(5,'Graciela','Paez',new Date('2022-06-05'),false),
    new Alumno(6,'Patricia','Pipe',new Date('2022-04-26'),true),

  ]
  constructor() {}

  ngOnInit(): void {

  }
}
