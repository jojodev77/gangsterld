import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ResumeComponent } from './resume/resume.component';
import { PpComponent } from './pp/pp.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { CommanderComponent } from './commander/commander.component';
import { PhotoComponent } from './photo/photo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import * as $ from 'jquery';
import { GestionService } from './gestion.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ResumeComponent,
    PpComponent,
    VideoComponent,
    ContactComponent,
    CommanderComponent,
    PhotoComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
