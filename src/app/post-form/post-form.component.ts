import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() postRef: Post;
  @Output() submitted = new EventEmitter<Post>();

  constructor() {}

  submitPost(form: NgForm) {
    this.submitted.emit(form.value);
    form.reset();
  }
  ngOnInit(): void {}
}
