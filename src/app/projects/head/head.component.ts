import { Component, Input, ChangeDetectorRef, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  @Input() activatedRoute: string = '';


  languagesFilter: Array<any> = [];
  categories: Array<any> = [
    {
      category: 'PL',
      title: 'Linguagens de programação'
    },
    {
      category: 'FE',
      title: 'Front-End'
    },
    {
      category: 'DB',
      title: 'Bancos de dados'
    }
  ];

  constructor(private cdRef: ChangeDetectorRef, private elementRef: ElementRef) { }
  @HostListener('document:click' , ['$event'])
  @HostListener('document:touch' , ['$event'])
  clickOutside(event: Event): void {
    let menuFilters = this.elementRef.nativeElement.querySelector('#filters');
    let closeButtons = this.elementRef.nativeElement.querySelectorAll('.close');
    let containerFilters = this.elementRef.nativeElement.querySelector('#container-filters')

    if (menuFilters && closeButtons && containerFilters) {
      let buttonClicked = Array.from(closeButtons).some((button: any) => button.contains(event.target))

      if(!menuFilters.contains(event.target) && !buttonClicked){
        if(containerFilters.classList.contains('visible')){
          this.toggleVisible();
        }
      }
    }
  }

  toggleVisible(): void {
    let menu = this.elementRef.nativeElement.querySelector('#container-filters');

    if (menu) {
      if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
      } else {
        menu.classList.add('visible');
      }
    }
  }
}