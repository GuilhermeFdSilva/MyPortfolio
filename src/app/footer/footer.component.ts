import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagerService } from 'src/assets/service/dataManagerService/data-manager.service';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';
import { Project } from 'src/assets/service/dataManagerService/projects/projects.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
  languages: Array<Language> = [];
  projects: Array<Project> = [];

  constructor(private router: Router, private dataManagerService: DataManagerService) { }

  ngOnInit(): void {
    this.dataManagerService.getObservableData.subscribe((loaded) => {
      if (loaded) {
        this.languages = this.dataManagerService.getLanguages.filter((language) => language.isMian);
        this.projects = this.dataManagerService.getProjects;
      }
    });
  }

  goTo(link: string): void {
    window.open(link, '_blank');
  }

  goToProject(route: string) {
    this.router.navigate([`/projetos/${route.toLowerCase()}`]);
  }
}
