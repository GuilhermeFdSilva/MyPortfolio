import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  goTo(link: string): void {
    window.open(link, '_blank');
  }

  onGoTo(link: string) {
    this.goTo(link);
  }
}
