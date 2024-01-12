// src/app/tasks.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'http://localhost:37589/todos';

  constructor(private http: HttpClient) {}

  public index(archived = false): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl, {
      params: {
        archived,
      },
    });
  }

  public post(task: Task): Observable<Task> {
    const url = `${this.apiUrl}`;
    return this.http.post<Task>(url, task);
  }

  public put(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  public delete(task: Task): Observable<any> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete(url);
  }
}
