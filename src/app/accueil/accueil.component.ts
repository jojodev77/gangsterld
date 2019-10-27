import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
baudio: number;

  constructor(private gs: GestionService) {this.relance(); }

  ngOnInit() {
    this.gs.baudio = 1;
    this.gs.audi().subscribe(
      data => {this.baudio = data; }
    );
    this.gs.aud();
this.relance();
      }
relance () {
  this.gs.baudio = 1;
  this.gs.audi().subscribe(
    data => {this.baudio = data; }
  );
  this.gs.aud();
}
  }


