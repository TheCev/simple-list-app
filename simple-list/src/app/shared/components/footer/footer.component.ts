import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<mat-toolbar color="primary">
	<span class="text">Created by Enrique Rodriguez</span>
</mat-toolbar>
  `,
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
