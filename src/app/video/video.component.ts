import { Component, OnInit } from '@angular/core';
import {GestionService } from '../gestion.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
baudio: number;

  constructor(private gs: GestionService) { }

  ngOnInit() {

    this.gs.baudio = 0;
    this.gs.audi().subscribe(
      data => {this.baudio = data; }
    );
    this.gs.aud();
      }

}
