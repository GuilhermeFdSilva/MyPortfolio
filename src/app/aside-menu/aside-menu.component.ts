import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent {
  expandablePanels: any[] = [
    {
      title: "Angular",
      icon: "../../assets/icons/angular.svg",
      projectLinks: [
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
