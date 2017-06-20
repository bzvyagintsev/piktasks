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
  
  showTask(id) {
    return new Promise((resolve, reject) => {
        this.http.get('api/tasks/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveTask(data) {
    return new Promise((resolve, reject) => {
        this.http.post('api/tasks', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateTask(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('api/tasks/'+id, data)
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