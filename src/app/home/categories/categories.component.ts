import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Input() mainCategories: Array<Language> = [];

  constructor(private router: Router) { }
  
  goToProjects(name: string): void {
    this.router.navigate([`projetos/${name}`]);
  }

  scroll(id: string): void {
    let target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  }
}
