import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Task } from "../../models"

@Injectable()
export class TaskService {
  public Tasks: Task[] = [
    {
      id: 1,
      name: "Get accessto the shopfloor",

    },

  ];

  private task : Task;

  getTasks(): Observable<Task[]> {
    return observableOf(this.Tasks);
  }

  getTaskById(id: number): Task {
    return this.Tasks.find(x => x.id === id);
  }

}
