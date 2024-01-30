import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { Language, LanguagesService } from './languages/languages.service';
import { Project, ProjectsService } from './projects/projects.service';
import { Comment, CommentsService } from './comments/comments.service';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private languages: Array<Language> = [];
  private projects: Array<Project> = [];
  private comments: Array<Comment> = [];

  private observableData = new BehaviorSubject<boolean>(false);
  private observableComments = new BehaviorSubject<boolean>(false);

  constructor(
    private languagesService: LanguagesService,
    private projectsService: ProjectsService,
    private commentsService: CommentsService
  ) {
    this.loadLanguagesAndProjects();
  }

  get getLanguages(): Array<Language> {
    return this.languages;
  }

  get getProjects(): Array<Project> {
    return this.projects;
  }

  get getComments(): Array<Comment> {
    return this.comments;
  }

  get getObservableData(): Observable<boolean> {
    return this.observableData.asObservable();
  }

  get getObservableComments(): Observable<boolean> {
    return this.observableComments.asObservable();
  }

  loadLanguagesAndProjects(): void {
    forkJoin([this.languagesService.getData, this.projectsService.getData])
      .subscribe(([languages, projects]) => {
        this.languages = languages.map((language) => Object.assign(new Language, language));
        this.projects = projects.map((project) => Object.assign(new Project, project));

        if (this.languages.length < 1 || this.projects.length < 1) {
          setTimeout(() => {
            this.loadLanguagesAndProjects();
          }, 500);
        } else {
          this.observableData.next(true);
        }
      });
  }

  likeProject(project: Project): void {
    this.projectsService.likeProject(project).subscribe((response) => {
      response = Object.assign(new Project(), response);

      let index = this.projects.findIndex((project) => project.getId == response.getId);
      
      this.projects[index] = response;
      
      this.observableData.next(true);
    });
  }

  dislikeProject(project: Project): void {
    this.projectsService.dislikeProject(project).subscribe((response) => {
      response = Object.assign(new Project(), response);

      let index = this.projects.findIndex((project) => project.getId == response.getId);

      this.projects[index] = response;

      this.observableData.next(true);
    });
  }

  loadComments(project_id: number): void {
    this.commentsService.getCommentsByProjectId(project_id).subscribe((response) => {
      this.comments = response.map((comment) => Object.assign(new Comment, comment));

      this.observableComments.next(true);
    });
  }

  commentUpVote(target: Comment, voted: boolean): void {
    if (voted) {
      this.commentsService.removeVoteUp(target).subscribe(() => this.observableComments.next(true));
    } else {
      this.commentsService.voteUp(target).subscribe(() => this.observableComments.next(true));
    }
  }

  commentDownVote(target: Comment, voted: boolean): void {
    if (voted) {
      this.commentsService.removeVoteDown(target).subscribe(() => this.observableComments.next(true));
    } else {
      this.commentsService.voteDown(target).subscribe(() => this.observableComments.next(true));
    }
  }
}
