import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LanguagesService {
  private languages: Array<Language> = [];
  
  constructor(private httpClient: HttpClient) {
    this.languages = [];
    this.getLanguages().subscribe((response) => {
      this.languages = response;
      console.log(this.languages);
    });
  }

  private getLanguages(): Observable<any> {
    return this.httpClient.get<any>("https://my-json-server.typicode.com/GuilhermeFdSilva/read-db-myPortfolio/languages");
  }
}

class Language {
  private name: string;
  private desc: string;
  private icon: string;
  private stick: string;
  private link: string;

  constructor(name: string, desc: string, icon: string, stick: string, link: string) {
    this.name = name;
    this.desc = desc;
    this.icon = icon;
    this.stick = stick;
    this.link = link;
  }

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
