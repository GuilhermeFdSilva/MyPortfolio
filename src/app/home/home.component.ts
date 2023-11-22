import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  languages: any[] = [
    {
      name: 'JavaScript',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-javascript.svg',
      linkDesc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'Java',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-java.svg',
      linkDesc: 'https://docs.oracle.com/en/java/',
    },
    {
      name: 'C',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-c.svg',
      linkDesc: 'https://www.ibm.com/docs/pt/i/7.2?topic=languages-c-c',
    },
    {
      name: 'Python',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-python.svg',
      linkDesc: 'https://wiki.python.org.br/PythonBrasil',
    }
  ]

  frontEnd: any[] = [
    {
      name: 'HTML',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-html.svg',
      linkDesc: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    },
    {
      name: 'CSS',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-css.svg',
      linkDesc: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    },
    {
      name: 'SASS',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-sass.svg',
      linkDesc: 'https://sass-lang.com/documentation/',
    },
    {
      name: 'Bootstrap',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-bootstrap.svg',
      linkDesc: 'https://getbootstrap.com.br/docs/4.1/getting-started/introduction/',
    },
    {
      name: 'Angular',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-angular.svg',
      linkDesc: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started',
    }
  ]

  database: any[] = [
    {
      name: 'SQL',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-mysql.svg',
      linkDesc: 'https://dev.mysql.com/doc/',
    },
    {
      name: 'MongoDB',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-mongodb.svg',
      linkDesc: 'https://www.mongodb.com/docs/',
    }
  ]

  categories: any[] = [
    {
      title: "Angular",
      icon: "https://guilhermefdsilva.github.io/icons-myPortfolio/angular.svg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat praesentium aut quasi quidem saepe vel voluptate maxime autem et corporis est, facere dignissimos numquam nesciunt sunt nisi temporibus cumque aperiam!",
      router: "home"
    },
    {
      title: "Java",
      icon: "https://guilhermefdsilva.github.io/icons-myPortfolio/java.svg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat praesentium aut quasi quidem saepe vel voluptate maxime autem et corporis est, facere dignissimos numquam nesciunt sunt nisi temporibus cumque aperiam!",
      router: "home"
    }
  ]

  goTo(link: string): void {
    window.open(link, '_blank');
  }
}
