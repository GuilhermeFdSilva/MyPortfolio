import { Title } from '@angular/platform-browser';
import { DataManagerService } from './../../assets/service/dataManagerService/data-manager.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { Project } from 'src/assets/service/dataManagerService/projects/projects.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
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
          this.readmeContent = readmeFind ? marked(readmeFind.getProjectReadme) : '';
        }
      });
    });
  }
}
