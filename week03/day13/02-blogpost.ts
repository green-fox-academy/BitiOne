'use strict';

export class BlogPost {
  protected _authorName: string;
  protected _title: string;
  protected _text: string;
  protected _publicationDate: string;

  constructor(authorName: string, title: string, text: string, publicationDate: string) {
    this._authorName = authorName;
    this._title = title;
    this._text = text;
    this._publicationDate = publicationDate;
  }
}

let blogPost01 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let blogPost02 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let blogPost03 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

console.log(blogPost01);
console.log(blogPost02);
console.log(blogPost03);