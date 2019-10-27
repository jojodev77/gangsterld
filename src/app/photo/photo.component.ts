import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
baudio: number;

  constructor(private gs: GestionService) { }

  ngOnInit() {
    this.gs.baudio = 1;
    this.gs.audi().subscribe(
      data => {this.baudio = data; }
    );
    this.gs.aud();
  }

}
