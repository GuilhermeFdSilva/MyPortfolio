import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  projectLinks: any[] = [
    {
      title: "Angular",
      icon: "../../assets/icons/angular.svg",
      projectLinks: [
        {
          projectTitle: "Projeto final StartTech",
          link: "https://google.com"
        },
        {
          projectTitle: "Projeto final StartTech",
          link: "https://google.com"
        },
        {
          projectTitle: "Projeto final StartTech",
          link: "https://google.com"
        }
      ]
    },
    {
      title: "Java",
      icon: "../../assets/icons/java.svg",
      projectLinks: [
        {
          projectTitle: "Projeto projetado",
          link: "https://google.com"
        }
      ]
    }
  ]
}
