import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
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
