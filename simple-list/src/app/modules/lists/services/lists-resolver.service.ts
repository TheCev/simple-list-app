import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
	Resolve,
} from '@angular/router'

import { ListService } from './list.service'

@Injectable({
  providedIn: 'root'
})
export class ListsResolverService implements Resolve<any>{

  constructor(
  	private listSvc: ListService,
  	private router: Router
  	) { }

  resolve(
  	route: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot){
  	return this.listSvc.getLists()
  }
}
