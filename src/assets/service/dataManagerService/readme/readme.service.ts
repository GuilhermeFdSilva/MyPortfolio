import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadmeService {
  private readme: string;

  private observableData = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  getProjectReadme(projectName: string) {
    this.httpClient.get<any>(`https://api.github.com/repos/GuilhermeFdSilva/${projectName}/contents/README.md`)
      .subscribe((response) => {
        this.readme = this.decode(response.content);
        this.observableData.next();
      });
  }

  private decode(content: string): string {
    const binaryString = atob(content);
    
    const textReadme = new TextDecoder('utf-8').decode(new Uint8Array([...binaryString].map(char => char.charCodeAt(0))));
    
    return textReadme;
  }

  get getReadme(): string {
    return this.readme;
  }

  get getObservableData(): Observable<void> {
    return this.observableData.asObservable();
  }
}
