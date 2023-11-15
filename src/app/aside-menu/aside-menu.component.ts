import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent {
  visible: boolean = false;

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

  changeOpacity(): void {
    const container = document.getElementById('transparent-container');

    if (container) {
      container.style.opacity = this.visible ? '1' : '0';
    }
  }

  toggleMenu(): void {
    this.visible = !this.visible;

    const aside = document.getElementsByTagName('aside');

    if (aside) {
      if (this.visible) {
        aside[0].classList.add('translate-menu');
        this.changeOpacity();
      } else {
        aside[0].classList.remove('translate-menu');
        this.changeOpacity();
      }
    }
  }

  closeMenu(): void {
    if (this.visible) {
      this.toggleMenu()
    }
  }
}
