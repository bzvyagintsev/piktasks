import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private http: Http) { }
  
  getAllTasks() {
    return new Promise((resolve, reject) => {
      this.http.get('api/tasks')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteTask(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('api/tasks/' + id)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}