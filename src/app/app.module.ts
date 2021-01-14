import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { EnteteComponent } from './entete/entete.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeroComponent } from './hero/hero.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { DialogNewHeroComponent } from './dialog-new-hero/dialog-new-hero.component';

import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { TableHerosComponent } from './table-heros/table-heros.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    EnteteComponent,
    RechercheComponent,
    CarouselComponent,
    HeroComponent,
    PiedPageComponent,
    TableHerosComponent,
    DialogNewHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,    
    HttpClientModule, 
    MatCardModule,
    MatTableModule,    
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
