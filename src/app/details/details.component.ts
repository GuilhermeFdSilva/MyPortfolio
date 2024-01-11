import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { Project } from 'src/assets/service/dataManagerService/projects/projects.service';
import { DataManagerService } from './../../assets/service/dataManagerService/data-manager.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  project: Project = new Project();
  readmeContent: string | Promise<string>;

  constructor(private activatedRoute: ActivatedRoute, private dataManagerService: DataManagerService, private title: Title) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id') ?? '';

      this.dataManagerService.getObservableData.subscribe((loaded) => {
        if (loaded) {
          const projectFind = this.dataManagerService.getProjects.find((project) => project.getId == Number.parseInt(id));
          this.project = projectFind ? projectFind : new Project();

          this.title.setTitle(`Detalhes ${this.project.getTitle ?? ''}`);

          const readmeFind = this.dataManagerService.getReadmeList.find((readme) => readme.getProjectName === this.project.getNameGH);

          if (readmeFind) {
            this.readmeContent = marked(readmeFind.getProjectReadme);
          } else {
            this.readmeContent = '';
          }
        }
      });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const divContainer = document.querySelector('#content-readme');

      if (divContainer) {
        const elements = divContainer.querySelectorAll('code');

        elements.forEach((element: HTMLElement) => {
          element.style.display = 'block';
          element.style.width = '100%';
          element.style.overflow = 'hidden';
          element.style.textOverflow = 'ellipsis';
        });
      }
    }, 500);
  }

  goTo(link: string) {
    window.open(link, '_blank');
  }
}
