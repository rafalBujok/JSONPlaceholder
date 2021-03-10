import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PostActions from '../actions/post.action';
import Post from '../models/post.model';

@Injectable()
export class PostEffects {
  constructor(private http: HttpClient, private action$: Actions) { }

  private ApiURL: string = 'https://jsonplaceholder.typicode.com/';

  GetPosts$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(PostActions.BeginGetPostAction),
      mergeMap(action =>

        this.http.get(this.ApiURL + 'posts').pipe(
          map((data: Post[]) => {
            return PostActions.SuccessGetPostAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(PostActions.ErrorPostAction(error));
          })
        )
      )
    )
  );

}
