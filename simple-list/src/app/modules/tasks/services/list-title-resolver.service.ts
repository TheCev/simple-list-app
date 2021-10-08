import { Injectable } from '@angular/core';
import {
	Router, Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
} from '@angular/router'

import { TasksService } from './tasks.service';
import { Task } from 'src/app/modules/lists/interfaces/list.interface'

import {EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListTitleResolverService implements Resolve<any> {
  constructor(
  	private tasksSvc: TasksService,
  	private router: Router
  	) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	const id = route.paramMap.get('listId')

  	return this.tasksSvc.getList(id).pipe(
      take(1),
      mergeMap((list) => {
        if(list){
          return of(list)
        }else{
          this.router.navigate(['lists'])
          return EMPTY
        }
      })
      )
 
  }
  
}
