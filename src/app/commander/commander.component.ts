import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})

export class CommanderComponent implements OnInit {
  $: any;
  isChecked = false;
  constructor(private gs: GestionService) { }
baudio: number;

  ngOnInit() {
    $('#super').change(function() {
      if ($(this).prop('checked')) {
        $('#achat').show();
        $('#cgv').hide();
      } else {
        $('#achat').hide();
      }
    });

    this.gs.baudio = 1;
    this.gs.audi().subscribe(
      data => {this.baudio = data; }
    );
    this.gs.aud();
  }

affichezAcheter () {


}


toggle() {
   this.isChecked = !this.isChecked;
   if (this.isChecked) {
    const div = document.getElementById('achat');
    div.style.display = 'block';
   }
}
}
