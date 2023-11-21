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
      projectLinks: [
        {
          projectTitle: "Projeto projetado",
          link: "https://google.com"
        }
      ]
    }
  ];

  mainLinks: any[] = [
        {
      link: "https://www.linkedin.com/in/guilherme-fran%C3%A7a-da-silva-4756a8155",
      icon: "https://guilhermefdsilva.github.io/icons-myPortfolio/linkedin.svg",
      description: "Linkedin"
    },
    {
      link: "https://github.com/GuilhermeFdSilva",
      icon: "https://guilhermefdsilva.github.io/icons-myPortfolio/gitHub.svg",
      description: "GitHub"
    },
    {
      link: "mailto:francaguilherme27@gmail.com",
      icon: "https://guilhermefdsilva.github.io/icons-myPortfolio/email.svg",
      description: "Email"
    },
    {
      link: "https://drive.google.com/file/d/1tP8D-_z6kA6-VTLT6-dHS5_nEZ0yaQjF/view?usp=sharing",
      icon: "https://guilhermefdsilva.github.io/icons-myPortfolio/pdfFile.svg",
      description: "Curriculo"
    }
  ];

  goTo(link: string): void {
    window.open(link, '_blank');
  }
}
