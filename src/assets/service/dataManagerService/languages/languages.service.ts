import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  constructor(private httpClient: HttpClient) { }

  get getData(): Observable<Array<Language>> {
    return this.httpClient.get<Array<Language>>('https://api.francaguilherme.com.br/languages');
  }
}

export class Language {
  private name: string;
  private description: string;
  private type: string;
  private icon: string;
  private stick: string;
  private link: string;
  private main: boolean;

  constructor() { }

  get getName(): string {
    return this.name;
  }

  get getDesc(): string {
    return this.description;
  }

  get getType(): string {
    return this.type;
  }

  get getIcon(): string {
    return this.icon;
  }

  get getStick(): string {
    return this.stick;
  }

  get getLink(): string {
    return this.link;
  }

  get isMain(): boolean {
    return this.main;
  }

  noName(): Language {
    this.name = '';
    return this;
  }
}
