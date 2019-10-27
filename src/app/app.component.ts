import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { GestionService } from './gestion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navbarOpen = false;
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;
baudio: number ;
constructor (private router: Router, private gs: GestionService) {

}

ngOnInit() {
  this.gs.baudio = 1;
  this.gs.audi().subscribe(
    data => {this.baudio = data; }
  );
  this.gs.aud();
this.navigate();
this.relance();
}
navigate () {
this.router.navigate(['/accueil']);
}
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
relance () {
  this.gs.baudio = 1;
  this.gs.audi().subscribe(
    data => {this.baudio = data; }
  );
  this.gs.aud();
}
}
