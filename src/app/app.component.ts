import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });


  Posts = [
    {
      title: "post1",
      content: "flsgaourarhbruuarpugbaperuhtazprfaurbgaperougbaerugapzerugprbgpvuaepvuvfksmlfvnsmirma",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "post2",
      content: "flsgaourarhbruuarpugbaperuhtazprfaurbgaperougbaerugapzerugprbgpvuaepvuvfksmlfvnsmirma",
      loveIts: 0,
      created_at: new Date()
    } ,
    {
      title: "post3",
      content: "flsgaourarhbruuarpugbaperuhtazprfaurbgaperougbaerugapzerugprbgpvuaepvuvfksmlfvnsmirma",
      loveIts: 0,
      created_at: new Date()
    }

  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }

}
