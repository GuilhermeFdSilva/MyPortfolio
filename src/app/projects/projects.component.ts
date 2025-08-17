import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  route: string = '';

  constructor(private activatedRoute: ActivatedRoute, private title: Title) { }

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
    });
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
