import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<div class="container">
				<mat-card>
					<mat-card-title>Error:404 - Page Not Found </mat-card-title>
					<mat-card-content><mat-icon>find_in_page</mat-icon></mat-card-content>
					<mat-card-footer>The page wich you is trying to get not exist</mat-card-footer>
				</mat-card>
			</div>`,
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent { 

}
