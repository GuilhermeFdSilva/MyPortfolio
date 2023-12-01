import { ReadmeService } from './../../assets/services/readme/readme.service';
import { LanguagesService } from './../../assets/services/languages/languages.service';
import { ProjectsService } from './../../assets/services/projects/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/assets/services/projects/projects.service';
import { Language } from 'src/assets/services/languages/languages.service';
import { marked } from 'marked';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  project: Project = new Project();
  languages: Array<Language> = [];
  readmeContent: string | Promise<string>;

  constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService, private languagesService: LanguagesService, private readmeService: ReadmeService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id') ?? '';

      let projectFind = this.projectsService.getProjects.find((project) => project.getId == Number.parseInt(id));
      this.project = projectFind ? projectFind : new Project();
      this.projectsService.getObservableData.subscribe(() => {
        projectFind = this.projectsService.getProjects.find((project) => project.getId == Number.parseInt(id));
        this.project = projectFind ? projectFind : new Project();

        this.readmeService.getProjectReadme(this.project.getNameGH);
        this.readmeService.getObservableData.subscribe(() => {
          this.readmeContent = marked(this.readmeService.getReadme);
        });
      });
    });

    this.languages = this.languagesService.getLanguages;
    this.languagesService.getObservableData.subscribe(() => {
      this.languages = this.languagesService.getLanguages;
    });
  }
}
