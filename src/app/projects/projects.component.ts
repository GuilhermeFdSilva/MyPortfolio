import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor (private activatedRoute: ActivatedRoute) {}

  module: string;

  tools: any[] = [
    {
      name: 'JavaScript',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-javascript.svg',
    },
    {
      name: 'Java',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-java.svg',
    },
    {
      name: 'C',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-c.svg',
    },
    {
      name: 'Python',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-python.svg',
    },
    {
      name: 'HTML',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-html.svg',
    },
    {
      name: 'CSS',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-css.svg',
    },
    {
      name: 'SASS',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-sass.svg',
    },
    {
      name: 'Bootstrap',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-bootstrap.svg',
    },
    {
      name: 'Angular',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-angular.svg',
    },
    {
      name: 'SQL',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-mysql.svg',
    },
    {
      name: 'MongoDB',
      src: 'https://guilhermefdsilva.github.io/icons-myPortfolio/stick-mongodb.svg',
    }
  ]

  mock: any = {
    title: "Angular",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat praesentium aut quasi quidem saepe vel voluptate maxime autem et corporis est, facere dignissimos numquam nesciunt sunt nisi temporibus cumque aperiam!",
    projects: [
      {
        img: "",
        readme: "",
        tools: [],
        link: ""
      },
      {
        img: "",
        readme: "",
        tools: [],
        link: ""
      },
      {
        img: "",
        readme: "",
        tools: [],
        link: ""
      },
    ]
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.module = param.get('module') ?? '';
    });
  }

  filter(module: string): void {

  }
}
