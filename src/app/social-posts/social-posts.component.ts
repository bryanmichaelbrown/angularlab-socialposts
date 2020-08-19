import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Angular',
      thought: 'Angular is cool',
    },
    {
      title: 'Corona',
      thought: 'Corona is aweful',
    },
    {
      title: 'Life',
      thought: 'Life is beautiful',
    },
  ];
  showForm: boolean = false;
  constructor() {}
  onSubmit(post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }
  onDelete(index: number) {
    this.posts.splice(index, 1);
  }
  toggleForm() {
    this.showForm = !this.showForm;
  }
  ngOnInit(): void {}
}
