import { Component, OnInit, ViewChild  } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import {MatDialog} from '@angular/material/dialog';
import { DialogNewHeroComponent } from '../dialog-new-hero/dialog-new-hero.component';


@Component({
  selector: 'app-table-heros',
  templateUrl: './table-heros.component.html',
  styleUrls: ['./table-heros.component.css']
})
export class TableHerosComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;

  heros: Hero[];
  columnsToDisplay = ['nom', 'actions'];  

  newHero : Hero;
  selectedHero: Hero;

  constructor(private heroService: HeroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newHero = {_id: null, nom:''};
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(resultat => this.heros = resultat);
  }

  openDialogNewHero(): void {
    const dialogRef = this.dialog.open(DialogNewHeroComponent, {
      width: '250px',
      data: this.newHero
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.newHero = result;
        console.log(this.newHero);
        this.heroService.addHero(this.newHero)
            .subscribe(hero  => { this.heros.push(hero); this.newHero._id = null; this.newHero.nom=''; this.table.renderRows()});
      }
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onEdit(heroFormEdition: NgForm): void {
    if (heroFormEdition.valid) {
      this.heroService.updateHero(this.selectedHero)
          .subscribe(() => this.selectedHero = null);
    }
   }
   
   onDelete(hero: Hero): void {
    this.heroService.deleteHero(hero._id)
        .subscribe(result => this.heros = this.heros.filter(h => h !== hero));
   }
   


}
