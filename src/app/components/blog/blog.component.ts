import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  title: string = "";
  image: string = "";
  text: string = "";
  date: string = "";
  arrNoticias: Noticia[] = [];
  publish: string = "";

  send() : void {
    let noticia : Noticia = {
      title: this.title,
      image: this.image,
      text: this.text,
      date: this.date
    }
    this.arrNoticias.push(noticia);
    console.log(this.arrNoticias);
    this.load();

    this.title = "";
    this.image = "";
    this.text = "";
    this.date = "";
  }

  load() : void {
    this.publish = "";
    this.arrNoticias.forEach(noticia => {
      this.publish += `<li> ${noticia.title} ${noticia.image} ${noticia.text} ${noticia.date} </li>`
    })
  }
}
