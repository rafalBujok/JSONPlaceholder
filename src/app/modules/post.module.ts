import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostReducer } from '../posts/post.reducer';
import { StoreModule } from '@ngrx/store';
import { PostEffects } from '../posts/post.effects';
import { EffectsModule } from '@ngrx/effects';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    StoreModule.forFeature('postFeature',  PostReducer ),
    EffectsModule.forFeature( [PostEffects]),
  ]
})
export class PostModule { }
