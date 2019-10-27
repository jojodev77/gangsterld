import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-pp',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.css']
})
export class PpComponent implements OnInit {
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
