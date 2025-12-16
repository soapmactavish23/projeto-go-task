import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ITask } from '../interfaces/task.interface';
import { ITaskFormControls } from '../interfaces/task-form-controls.interface';
import { TaskStatusEnum } from '../enums/task-status.enum';
import { generateUniqueIdWithTimestamp } from '../utils/generate-unique-id-with-timestamp';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //Tarefas a A fazer
  private todoTask$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTasks = this.todoTask$
    .asObservable()
    .pipe(map((tasks) => structuredClone(tasks)));

  //Tarefas a A fazer
  private doingTask$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTasks = this.doingTask$
    .asObservable()
    .pipe(map((tasks) => structuredClone(tasks)));

  //Tarefas a A fazer
  private doneTask$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTasks = this.doneTask$
    .asObservable()
    .pipe(map((tasks) => structuredClone(tasks)));

  addTask(taskInfos: ITaskFormControls) {
    const newTask: ITask = {
      ...taskInfos,
      status: TaskStatusEnum.TODO,
      id: generateUniqueIdWithTimestamp(),
      comments: [],
    };

    const currentList = this.todoTask$.value;

    this.todoTask$.next([...currentList, newTask]);
  }
}
