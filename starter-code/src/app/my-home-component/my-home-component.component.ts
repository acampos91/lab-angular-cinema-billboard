import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  listMovies : Array<any>
  constructor(public Servicio : ServicesService) { }

  ngOnInit() {
   this.listMovies = this.Servicio.getMovies();
  }

}
