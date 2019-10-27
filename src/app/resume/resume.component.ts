import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
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
