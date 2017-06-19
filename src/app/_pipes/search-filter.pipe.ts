import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

@Injectable()

export class SearchFilterPipe implements PipeTransform {

 transform(tasks: any, search: any): any {
   if (search === undefined) return tasks;
   
   return tasks.filter((task) => {
     return task.name.toLowerCase().includes(search.toLowerCase());
   });
 };

}
