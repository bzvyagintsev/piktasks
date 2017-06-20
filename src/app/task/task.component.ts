import { Component, OnInit } from '@angular/core';
import { TaskService } from "../_services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title = "Список задач";

  tasks: any;
  p: number = 1;
  activeTask: number;
  
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

  deleteTask(id) {
    this.taskService.deleteTask(id).then((result) => {
      this.tasks = this.tasks.filter(task => task._id !== id);
    }, (err) => {
      console.log(err);
    });
  }

  showTaskInfo(i) {
    this.activeTask = i;
  }
}