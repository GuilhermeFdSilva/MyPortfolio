import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LanguagesService {
  private languages: Array<Language> = [];

  private oservableData = new Subject<void>();
  
  constructor(private httpClient: HttpClient) {
    this.languages = [];
    this.getHTTPObservable().subscribe((response) => {
      this.languages = response.map((object) => Object.assign(new Language, object));
      this.oservableData.next();
    });
  }

  get getLanguages(): Array<Language> {
    return this.languages;
  }

  get getObservableData(): Observable<void> {
    return this.oservableData.asObservable();
  }

  private getHTTPObservable(): Observable<Array<Language>> {
    return this.httpClient.get<Array<Language>>("https://my-json-server.typicode.com/GuilhermeFdSilva/read-db-myPortfolio/languages");
  }
}

export class Language {
  private name: string;
  private desc: string;
  private type: string;
  private icon: string;
  private stick: string;
  private link: string;

  constructor() { }

  get getName(): string {
    return this.name;
  }

  set setName(value: string) {
    this.name = value;
  }

  get getDesc(): string {
    return this.desc;
  }

  set setDesc(value: string) {
    this.desc = value;
  }

  get getType(): string {
    return this.type;
  }

  set setType(value: string) {
    this.type = value;
  }

  get getIcon(): string {
    return this.icon;
  }

  set setIcon(value: string) {
    this.icon = value;
  }

  get getStick(): string {
    return this.stick;
  }

  set setStick(value: string) {
    this.stick = value;
  }

  get getLink(): string {
    return this.link;
  }

  set setLink(value: string) {
    this.link = value;
  }
}
