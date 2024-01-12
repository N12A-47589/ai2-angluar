import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = {};

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(): void {
    this.tasksService.index().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
