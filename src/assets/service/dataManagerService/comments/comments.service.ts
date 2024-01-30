import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private httpClient: HttpClient) { }

  getCommentsByProjectId(project_id: number): Observable<Array<Comment>> {
    return this.httpClient.get<Array<Comment>>(`https://api.francaguilherme.com.br/public/comments/${project_id}`);
  }

  voteUp(target: Comment): Observable<Comment>{
    return this.httpClient.put<Comment>('https://api.francaguilherme.com.br/public/comment/up', target);
  }

  voteDown(target: Comment): Observable<Comment>{
    return this.httpClient.put<Comment>('https://api.francaguilherme.com.br/public/comment/down', target);
  }

  removeVoteUp(target: Comment): Observable<Comment>{
    return this.httpClient.put<Comment>('https://api.francaguilherme.com.br/public/comment/remove-up', target);
  }

  removeVoteDown(target: Comment): Observable<Comment>{
    return this.httpClient.put<Comment>('https://api.francaguilherme.com.br/public/comment/remove-down', target);
  }
}

export class Comment {
  private id: number;
  private nick: string;
  private message: string;
  private up: number;
  private down: number;
  private project_id: number;

  constructor() { }

  get getId(): number {
    return this.id;
  }

  get getNick(): string {
    return this.nick;
  }

  set setNick(nick: string) {
    this.nick = nick;
  }

  get getMessage(): string {
    return this.message;
  }

  set setMessage(message: string) {
    this.message = message;
  }

  get getUp(): number {
    return this.up;
  }

  get getDown(): number {
    return this.down;
  }

  get getProject_id(): number {
    return this.project_id;
  }
}
