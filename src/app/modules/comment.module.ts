import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CommentReducer } from '../comments/comment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CommentEffects } from '../comments/comment.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('commentFeature', CommentReducer),
    EffectsModule.forFeature([CommentEffects]),
  ]
})
export class CommentModule { }
