import { Component, Input } from '@angular/core';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Input() mainCategories: Array<Language> = [];

  scroll(id: string): void {
    let target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  }
}
