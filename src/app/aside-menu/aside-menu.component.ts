import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';
import { DataManagerService } from './../../assets/service/dataManagerService/data-manager.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
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
  mainCategories: Array<Language> = [];

  constructor(private dataManagerService: DataManagerService, private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.dataManagerService.getObservableData.subscribe((loaded) => {
      if (loaded) {
        this.mainCategories = this.dataManagerService.getLanguages.filter((language) => language.isMain);
      }
    });
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touch', ['$event'])
  clickOutside(event: Event): void {
    let menu = this.elementRef.nativeElement.querySelector('#aside-menu');
    let button = this.elementRef.nativeElement.querySelector('#open-menu-button');

    if (menu) {
      if (!menu.contains(event.target) && !button.contains(event.target)) {
        if (menu.classList.contains('visible')) {
          this.toggleMenu();
        }
      }
    }
  }

  toggleMenu(): void {
    let menu = this.elementRef.nativeElement.querySelector('#aside-menu');
    
    if (menu && window.innerWidth < 800) {
      let list = menu.classList;

      if (list.contains('visible')) {
        menu.classList.remove('visible')
      } else {
        menu.classList.add('visible');
      }
    }
  }

  goTo(link: string){
    window.open(link, '_blank');
  }

  goToProjects(route: string) {
    this.router.navigate([`/projetos/${route.toLowerCase()}`]);
  }
}
