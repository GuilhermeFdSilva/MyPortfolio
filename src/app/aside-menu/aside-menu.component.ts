import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';
import { DataManagerService } from './../../assets/service/dataManagerService/data-manager.service';

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
      icon: "https://guilhermefdsilva.github.io/read-db-myPortfolio/logos/linkedin.svg",
      description: "Linkedin"
    },
    {
      link: "https://github.com/GuilhermeFdSilva",
      icon: "https://guilhermefdsilva.github.io/read-db-myPortfolio/logos/gitHub.svg",
      description: "GitHub"
    },
    {
      link: "mailto:francaguilherme27@gmail.com",
      icon: "https://guilhermefdsilva.github.io/read-db-myPortfolio/logos/email.svg",
      description: "Email"
    },
    {
      link: "https://drive.google.com/file/d/1tP8D-_z6kA6-VTLT6-dHS5_nEZ0yaQjF/view?usp=sharing",
      icon: "https://guilhermefdsilva.github.io/read-db-myPortfolio/logos/pdfFile.svg",
      description: "Curriculo"
    }
  ];
  mainCategories: Array<Language> = [];

  constructor(private dataManagerService: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.dataManagerService.getObservableData.subscribe((loaded) => {
      if (loaded) {
        this.mainCategories = this.dataManagerService.getLanguages.filter((language) => language.isMian);
      }
    });
  }

  changeDisplay(): void {
    const container = document.getElementById("transparent-container");

    if (container) {
      container.style.display = this.visible ? "block" : "none";
    }
  }

  toggleMenu(): void {
    this.visible = !this.visible;

    const aside = document.getElementsByTagName("aside");

    if (aside) {
      if (this.visible) {
        aside[0].classList.add("translate-menu");
        this.changeDisplay();
      } else {
        aside[0].classList.remove("translate-menu");
        this.changeDisplay();
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

  goToProjects(route: string) {
    this.router.navigate([`/projetos/${route.toLowerCase()}`]);
  }
}
