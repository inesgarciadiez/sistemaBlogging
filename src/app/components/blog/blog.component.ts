import { Component } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  title: string = "";
  image: any = "";
  text: string = "";
  date: string = "";
  arrNews: News[] = [];
  publish: string = "";

  constructor() {

    let noticia: News = {
      title: "Caballo",
      image: "data:image/jpeg;base64,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",
      text:"Los caballos y los humanos tienen una relación muy antigua. Se cree que los nómadas asiáticos fueron los que probablemente domesticaron a los primeros caballos hace unos 4.000 años, momento desde el cual estos animales siguieron siendo esenciales para muchas sociedades hasta el advenimiento del motor. De hecho los  caballos todavía tienen reservado un lugar de honor en muchas culturas, y a menudo se encuentran vinculados a multitud de hazañas bélicas.",
      date: "2022-06-22"
    }

    let noticia2: News = {
      title: "Gatito",
      image: "https://ca-times.brightspotcdn.com/dims4/default/c3f4b96/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001",
      text:"El gato doméstico1​2​ (Felis silvestris catus), llamado más comúnmente gato, y de forma coloquial minino,3​ michino,4​ michi,5​ micho,6​ mizo,7​ miz,8​ morroño9​ o morrongo,10​ y algunos nombres más, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada, por la convivencia con el ser humano, del gato montés. El nombre actual en muchas lenguas proviene del latín vulgar catus. Paradójicamente, catus aludía a los gatos salvajes, mientras que los gatos domésticos eran llamados felis.",
      date: "2022-06-22"
    }

    this.arrNews.push(noticia);
    this.arrNews.push(noticia2);

    this.loader();

  }

  send(): void {
    let noticia: News = {
      title: this.title,
      image: this.image,
      text: this.text,
      date: this.date
    }
/*     if (this.title === "" || this.image === "" || this.text === "" || this.date === "") {
      alert('El campo no puede ser vacío');
    }
    else
    { */
      this.arrNews.push(noticia);
      console.log(this.arrNews);
      this.loader();
/*     }
 */
    this.title = "";
    this.image = "";
    this.text = "";
    this.date = "";
  }

  load(event: any) {
    this.image = event.target.value;
  }

  loader(): void {
    this.publish = "";
    this.arrNews.forEach(news => {
      this.publish += `<article class="article"><div class="title"><strong>${news.title}</strong></div> <br> <img src= "${news.image}" class="imagen"> <br> ${news.text} <br> ${news.date}</article>`

    })
  }
}
