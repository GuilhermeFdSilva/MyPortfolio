import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/assets/service/dataManagerService/projects/projects.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() filteredProjects: Array<Project> = [];

  constructor(private router: Router) { }

  goToDetails(projectId: number): void {
    this.router.navigate([`detalhes/${projectId}`]);
  }
}
