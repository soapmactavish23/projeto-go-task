import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  readonly todoTasks = this.todoTask$.asObservable();

  //Tarefas a A fazer
  private doingTask$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTasks = this.todoTask$.asObservable();

  //Tarefas a A fazer
  private doneTask$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTasks = this.todoTask$.asObservable();

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
