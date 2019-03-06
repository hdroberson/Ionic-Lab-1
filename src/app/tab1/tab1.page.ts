import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  text : String = '';
  posts = [];

  createPost(){
    this.posts.push(this.text); // push the text into the array
    this.text = ''; // clear the text
  }

}
