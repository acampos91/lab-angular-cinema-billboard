import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServicesService} from '../services.service'
@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute, public listMovies: ServicesService) { }
    movie;
    ngOnInit() {
      this.route.params
        .subscribe((params) => this.movie = this.listMovies.getMovie(params['id']));
    }

}
