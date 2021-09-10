import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
 <p class="text">{{  tasksDone +"/"+ totalTasks || 0}}</p>
<mat-progress-bar mode="determinate" color="warn" [value]="(tasksDone / totalTasks) * 100" >
 </mat-progress-bar>`,
  styles: ['']
})

export class ProgressBarComponent {
	@Input() tasksDone:number
	@Input() totalTasks:number

}
