import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';


console.log('CardModule - NEVER IMPORTED')


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
