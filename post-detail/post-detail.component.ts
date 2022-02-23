import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../post/post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postModel = new PostModel();
  userId: number;
  title: string;
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number = +this.activatedRoute.snapshot.paramMap.get('postId');
    this.userId = +this.activatedRoute.snapshot.queryParamMap.get('userId');
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title');

    this.postService.getById(id).subscribe(response => {
      this.postModel = response as PostModel;
    })
  }
}
