import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from "../_services/task.service";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  title: string = "Добавить задачу";
  task = {};

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }

  saveTask() {
    this.taskService.saveTask(this.task).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/tasks', id]);
    }, (err) => {
      console.log(err);
    });
  }
}
