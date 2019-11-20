import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Task } from "../../models"
//import  { Requirement } from "../../models"
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class TaskService {
 
  constructor(private http: HttpClient) {}

  private task: Task;

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/task`);
  }

  createTask(task: Task): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/task`, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${environment.apiUrl}/task`, task);
  }

  deleteTask(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/task/${id}`);
  }

}
