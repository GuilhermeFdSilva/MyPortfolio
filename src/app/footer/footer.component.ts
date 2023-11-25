import { Project, ProjectsService } from './../../assets/services/projects/projects.service';
import { Language, LanguagesService } from 'src/assets/services/languages/languages.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  projects:   Array<Project> = [];

  constructor(private languagesService: LanguagesService, private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.languagesService.getObservableData.subscribe(() => {
      this.languages = this.languagesService.getLanguages.filter((language) => language.isMian);
    });
    this.projectsService.getObservableData.subscribe(() => {
      this.projects = this.projectsService.getProjects;
    });

    this.languages = this.languagesService.getLanguages.filter((language) => language.isMian);
    this.projects = this.projectsService.getProjects;
  }

  goTo(link: string): void {
    window.open(link, '_blank');
  }
  
  goToComponent(route: string) {
    this.router.navigate([`/projetos/${route.toLowerCase()}`]);
  }
}
