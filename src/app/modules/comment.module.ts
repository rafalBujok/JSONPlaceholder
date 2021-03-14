import { PostComponent } from './../components/post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CommentReducer } from '../comments/comment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CommentEffects } from '../comments/comment.effects';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('commentFeature', CommentReducer),
    EffectsModule.forFeature([CommentEffects]),
  ]
})
export class CommentModule { }
