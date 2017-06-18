import { Component, OnInit } from '@angular/core';
import {TaskService} from "../_services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTaskList();
  }

  getTaskList(){
    this.taskService.getAllTasks().then((res) => {
      this.tasks = res;
    }, (err) => {
      console.log(err);
    });
  }

}
