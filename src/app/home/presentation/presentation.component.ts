import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  @Input() languages: Array<Language> = [];
  @Input() frontEnd: Array<Language> = [];
  @Input() database: Array<Language> = [];

  @Output() goTo = new EventEmitter<any>();

  stackLocation: string = window.innerWidth > 800 ? 'ao lado' : 'abaixo';
  mainLinks: any[] = [
    {
      link: 'https://www.linkedin.com/in/guilherme-fran%C3%A7a-da-silva-4756a8155',
      icon: 'https://guilhermefdsilva.github.io/read-db-myPortfolio/logos/linkedin.svg',
      description: 'Linkedin'
    },
    {
      link: 'https://github.com/GuilhermeFdSilva',
      icon: 'https://guilhermefdsilva.github.io/read-db-myPortfolio/logos/gitHub.svg',
      description: 'GitHub'
    },
    {
      link: 'mailto:francaguilherme27@gmail.com',
      icon: 'https://guilhermefdsilva.github.io/read-db-myPortfolio/logos/email.svg',
      description: 'Email'
    },
    {
      link: 'https://drive.google.com/file/d/1tP8D-_z6kA6-VTLT6-dHS5_nEZ0yaQjF/view?usp=sharing',
      icon: 'https://guilhermefdsilva.github.io/read-db-myPortfolio/logos/pdfFile.svg',
      description: 'Curriculo'
    }
  ];

  navigate(link: string): void {
    this.goTo.emit(link);
  }
}
