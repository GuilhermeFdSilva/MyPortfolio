import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent {
  visible: boolean = false;

  mainLinks: any[] = [
    {
      link: "https://www.linkedin.com/in/guilherme-fran%C3%A7a-da-silva-4756a8155",
      icon: "../assets/icons/linkedin.svg",
      description: "Linkedin"
    },
    {
      link: "https://github.com/GuilhermeFdSilva",
      icon: "../assets/icons/gitHub.svg",
      description: "GitHub"
    },
    {
      link: "mailto:francaguilherme27@gmail.com",
      icon: "../assets/icons/email.svg",
      description: "Email"
    },
    {
      link: "https://drive.google.com/file/d/1tP8D-_z6kA6-VTLT6-dHS5_nEZ0yaQjF/view?usp=sharing",
      icon: "../assets/icons/pdfFile.svg",
      description: "Curriculo"
    }
  ]

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
    const container = document.getElementById("transparent-container");

    if (container) {
      container.style.opacity = this.visible ? "1" : "0";
    }
  }

  toggleMenu(): void {
    this.visible = !this.visible;

    const aside = document.getElementsByTagName("aside");

    if (aside) {
      if (this.visible) {
        aside[0].classList.add("translate-menu");
        this.changeOpacity();
      } else {
        aside[0].classList.remove("translate-menu");
        this.changeOpacity();
      }
    }
  }

  closeMenu(): void {
    if (this.visible) {
      this.toggleMenu()
    }
  }

  goTo(link: string){
    window.open(link, "_blank");
  }
}
