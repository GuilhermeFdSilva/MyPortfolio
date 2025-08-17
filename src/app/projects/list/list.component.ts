import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(private router: Router) { }

  goToDetails(projectId: number): void {
    this.router.navigate([`detalhes/${projectId}`]);
  }
}
