import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { Project } from 'src/assets/service/dataManagerService/projects/projects.service';
import { DataManagerService } from './../../assets/service/dataManagerService/data-manager.service';
import { Comment } from 'src/assets/service/dataManagerService/comments/comments.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit {
  project: Project = new Project();
  comments: Array<any> = [];
  readmeContent: string | Promise<string>;
  liked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataManagerService: DataManagerService,
    private title: Title,
    private elementRef: ElementRef,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id') ?? '';

      this.dataManagerService.getObservableData.subscribe((loaded) => {
        if (loaded) {
          const projectFind = this.dataManagerService.getProjects.find((project) => project.getId == Number.parseInt(id));
          this.project = projectFind ?? new Project();

          const readmeBase64 = new TextDecoder('utf-8').decode(Uint8Array.from(atob(this.project.getReadme), c => c.charCodeAt(0)));

          this.readmeContent = readmeBase64 ? marked(readmeBase64): '';

          this.title.setTitle(this.project.getTitle ?? '');

          this.dataManagerService.loadComments(Number.parseInt(id));
        }
      });
    });

    this.dataManagerService.getObservableComments.subscribe(() => {
      this.comments = this.dataManagerService.getComments.map((comment: Comment) => {
        return {obj: comment, votedUp: false, votedDown: false};
      });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const divContainer = this.elementRef.nativeElement.querySelector('#content-readme');

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

  toggleLike(): void {
    if (this.liked) {
      this.dataManagerService.dislikeProject(this.project);
      this.liked = false;
    } else if (!this.liked) {
      this.dataManagerService.likeProject(this.project);
      this.liked = true;
    }
  }

  goTo(link: string) {
    window.open(link, '_blank');
  }

  scroll(id: string): void {
    let target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  }

  voteUp(comment: Comment, voted: boolean) {
    this.dataManagerService.commentUpVote(comment, voted);
  }

  voteDown(comment: Comment, voted: boolean) {
    this.dataManagerService.commentDownVote(comment, voted);
  }

  comingSoon() {
    this.snackBar.open('Em breve!', "ok", {
      duration: 3000
    })
  }
}
