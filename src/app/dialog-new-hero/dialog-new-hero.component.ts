import { Component, Inject } from '@angular/core';
import { Hero } from '../hero';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-new-hero',
  templateUrl: './dialog-new-hero.component.html',
  styleUrls: ['./dialog-new-hero.component.css']
})
export class DialogNewHeroComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogNewHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public newHero: Hero) {

     }

     onAnnulerClick(): void {
      this.dialogRef.close();
    }

}
