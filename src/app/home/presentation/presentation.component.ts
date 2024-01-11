import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  @Input() languages: Array<Language> = [];
  @Input() frontEnd: Array<Language> = [];
  @Input() database: Array<Language> = [];

  @Output() goTo = new EventEmitter<any>();

  stackLocation: string = window.innerWidth > 800 ? 'ao lado' : 'abaixo';

  navigate(link: string): void {
    this.goTo.emit(link);
  }
}
