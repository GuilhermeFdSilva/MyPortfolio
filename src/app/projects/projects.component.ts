import { DataManagerService } from 'src/assets/service/dataManagerService/data-manager.service';
import { Project } from 'src/assets/service/dataManagerService/projects/projects.service';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  languages: Array<Language> = [];
  projects: Array<Project> = [];
  filteredProjects: Array<Project> = [];
  route: string = '';

  constructor(private activatedRoute: ActivatedRoute, private dataManagerService: DataManagerService, private title: Title) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    window.addEventListener('scroll', () => {
      let button = document.getElementById('to-top');

      if (button) {
        if (this.headIsVisible()) {
          button.classList.remove('visible');
        } else {
          button.classList.add('visible');
        }
      }
    });

    this.activatedRoute.paramMap.subscribe((param) => {
      this.route = param.get('module') ?? '';

      this.title.setTitle(`Projetos ${this.route ? ' - ' + this.route : ''}`)

      this.dataManagerService.getObservableData.subscribe((loaded) => {
        if (loaded) {
          this.languages = this.dataManagerService.getLanguages;
          this.projects = this.dataManagerService.getProjects;
        }
      });
    });
  }

  updateFilteredProjects(listProjects: Array<Project>): void {
    this.filteredProjects = listProjects;
  }

  toTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  headIsVisible(): boolean {
    let head = document.getElementById('head');

    if (head) {
      let elementArea = head.getBoundingClientRect();
      let windowHeight = window.innerHeight;

      return (elementArea.top <= windowHeight && elementArea.bottom >= 0);
    }

    return false;
  }
}
