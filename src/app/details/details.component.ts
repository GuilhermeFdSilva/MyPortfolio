import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  comments: Array<any> = [];
  readmeContent: string | Promise<string>;
  liked: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private snackBar: MatSnackBar) { }

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

  goTo(link: string) {
    window.open(link, '_blank');
  }

  scroll(id: string): void {
    let target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  }
}
