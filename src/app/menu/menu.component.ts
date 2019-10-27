import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navbarOpen = false;
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;
baudio: number;


  constructor(private gs: GestionService) { }

  ngOnInit() {
this.gs.baudio = 1;
this.gs.audi().subscribe(
  data => {this.baudio = data; }
);
this.gs.aud();
const son = document.getElementById('audio');
son.oncanplay(event);
  }

}
