import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  						<h4>Header 4 from App Component</h4>
  						<maimit></maimit>`,
  styles: [`
						h4 {
							color: blue;
						}
  `],
  directives: [TutorialsComponent]
})
export class AppComponent { name="Maimit";}
