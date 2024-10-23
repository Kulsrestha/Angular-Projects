import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type newTaskData } from './new-task/new-task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name: string | undefined;
  @Input() userId!: string;
  isAddingTasks = false;


  constructor(private taskService: TaskService) {

  }

  get selectedUserTasks() {
    return this.taskService.getUserTask(this.userId);
  }



  onStartAddTask() {
    this.isAddingTasks = true;
  }

  onCloseAddTask() {
    this.isAddingTasks = false;
  }

}