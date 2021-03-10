import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import Post from 'src/app/models/post.model';
import PostState from 'src/app/states/post.state';
import * as PostActions from '../../actions/post.action';



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  constructor(private store: Store<{ posts: PostState }>) {
    this.post$ = store.pipe(select('posts'));
  }
  post$: Observable<PostState>;
  postSubscription: Subscription;
  postList: Post[] = [];

  postError: Error = null;
  ngOnInit() {
    this.postSubscription = this.post$
      .pipe(
        map(x => {
          this.postList = x.Posts;
          this.postError = x.PostError;
        })
      )
      .subscribe();

    this.store.dispatch(PostActions.BeginGetPostAction());

  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
