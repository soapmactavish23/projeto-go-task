import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //Tarefas a A fazer
  private todoTask$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTasks = this.todoTask$.asObservable();

  //Tarefas a A fazer
  private doingTask$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTasks = this.todoTask$.asObservable();

  //Tarefas a A fazer
  private doneTask$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTasks = this.todoTask$.asObservable();
}
