
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import Post from 'src/app/posts/post.model';
import PostState, { getPostsState } from 'src/app/posts/post.state';
import * as PostActions from '../../posts/post.action';



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  constructor(private store: Store<{ Posts: PostState }>, private router: Router) {
    this.post$ = store.pipe(select(getPostsState));
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

    this.store.dispatch(PostActions.BeginGetPostsAction());

  }
  goTo(item: Post) {
    this.router.navigate(['/p/' + item.id])
  }
  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
