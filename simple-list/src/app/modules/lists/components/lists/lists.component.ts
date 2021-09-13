//Angular
import { Component } from '@angular/core';

@Component({ 
  selector: 'app-lists',
  template:`
<!--LISTS COMPONENT-->
<div class="container">
  <h2 class="subtitle">To Do Lists </h2>
    <!--LIST COMPONENT-->
  <app-list></app-list>

</div>

  `,
  styleUrls: ['./lists.component.sass']
})

export class ListsComponent { }
