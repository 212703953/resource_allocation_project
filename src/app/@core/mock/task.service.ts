import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Task } from "../../models"
import  { Requirement } from "../../models"

@Injectable()
export class TaskService {
  public tasks: Task[] = [
    {
      id: 1,
      name: "Get accessto the shopfloor",
      requirements : [],

    },

  ];

  private task : Task;

  getTasks(): Observable<Task[]> {
    return observableOf(this.tasks);
  }

  getTaskById(id: number): Task {
    return this.tasks.find(x => x.id === id);
  }

  getTaskRequirements(id:number):Requirement[]{
    return this.tasks.find(x=>x.id===id).requirements;
  }

}
