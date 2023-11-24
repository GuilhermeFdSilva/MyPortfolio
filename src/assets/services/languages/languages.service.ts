import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LanguagesService {
  private languages: Array<Language> = [];

  private observableData = new Subject<void>();
  
  constructor(private httpClient: HttpClient) {
    this.languages = [];
    this.getHTTPObservable().subscribe((response) => {
      this.languages = response.map((object) => Object.assign(new Language, object));
      this.observableData.next();
    });
  }

  get getLanguages(): Array<Language> {
    return this.languages;
  }

  get getObservableData(): Observable<void> {
    return this.observableData.asObservable();
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
  private main: boolean;

  constructor() { }

  get getName(): string {
    return this.name;
  }

  get getDesc(): string {
    return this.desc;
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

  get isMian(): boolean {
    return this.main;
  }
}
