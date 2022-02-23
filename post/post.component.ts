import { Component, OnInit } from "@angular/core";
import { PostModel } from "./post.model";
import { PostService } from "./post.service";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'post',
    templateUrl: './post.component.html'
})

export class PostComponent implements OnInit {
    lstPost: PostModel[] = [];
    defaultPage: number = 1;
    title: string = 'Create a post';
    postModel = new PostModel();
    alertMessage: string = '';

    constructor(private postService: PostService, private toastrService: ToastrService) {
    }

    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.postService.getAll().subscribe(
            (response) => {
                this.lstPost = response as PostModel[];
            },
            (error: Response) => {
                console.log(error);

                if (error.status === 404) {
                    //Expected error
                    this.toastrService.error('Resource not found..!');
                }
                else if (error.status === 400) {
                    //Expected error
                    this.toastrService.error('Bad Request..!');
                }
                else {
                    //UnExpected error
                    this.toastrService.error('UnExpected error occured..!');
                }
            });
    }
    addPost() {
        this.title = 'Create a post';
        this.postModel = new PostModel();
        this.alertMessage = '';
    }
    editPost(post: PostModel) {
        this.title = 'Edit a post';
        this.postModel = post;
        this.alertMessage = '';
    }
    viewPost(post: PostModel) {
        this.title = 'View a post';
        this.postModel = post;
        this.alertMessage = '';
    }
    deletePost(id: number) {
        //delete logic
        if (confirm("Are you sure to delete ?")) {
            this.postService.delete(id).subscribe(
                response => {
                    console.log(response);
                    this.toastrService.success('Post deleted successfully..!');
                },
                (error: Response) => {
                    if (error.status === 404) {
                        this.toastrService.error('Resource not found..!');
                    }
                    else {
                        this.toastrService.error('UnExpected error occured..!');
                    }
                });
            this.loadData();
        }
    }
    savePostDetail() {
        if (this.postModel.id) {
            //update           
            this.postService.update(this.postModel.id, this.postModel).subscribe(
                response => {
                    console.log(response);
                },
                (error: Response) => {
                    if (error.status === 404) {
                        this.toastrService.error('Resource not found..!');
                    }
                    else if (error.status === 400) {
                        this.toastrService.error('Bad request..!');
                    }
                    else {
                        this.toastrService.error('UnExpected error occured..!');
                    }
                })
            //this.alertMessage = 'Post updated successfully..!'
            this.toastrService.success('Post updated successfully..!');
        }
        else {
            //create
            this.postService.create(this.postModel).subscribe(
                response => {
                    console.log(response);
                },
                (error: Response) => {
                    if (error.status === 404) {
                        this.toastrService.error('Resource not found..!');
                    }
                    else if (error.status === 400) {
                        this.toastrService.error('Bad request..!');
                    }
                    else {
                        this.toastrService.error('UnExpected error occured..!');
                    }
                }
            );
            //this.alertMessage = 'Post created successfully..!'
            this.toastrService.success('Post created successfully..!');
        }
        this.loadData();
        this.postModel = new PostModel();
    }
}