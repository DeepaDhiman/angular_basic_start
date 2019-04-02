import { Component } from '@angular/core'

@Component({
	selector: 'maimit',
	template: `
					<h2>{{ title }}</h2>
					
					<h4>Header 4 form Tutorials Component</h4>
					<input type="text" [(ngModel)] = "fname">
					<input type="text" [(ngModel)] = "lname">
					Full name: {{fname}} {{lname}}<br><br>
					
					<img [src]="imagelink">
					
					<h5 [class.myClass] = "applyClass">Apply Class</h5>
					
					<h5 [style.color] = "applyBlue? 'blue' : 'orange'" >This is style binding</h5>
					
					<button (click)="onClick(name.value)">Click Me</button>
					<input type="text" #name>
					
					<h3 *ngIf="showElement">If Directive example</h3>
					
					<div [ngSwitch]="uname">
							<h4 *ngSwitchWhen="'maimit'">This is maimit</h4>
							<h4 *ngSwitchWhen="'chintu'"> This is Chntu</h4>
							<h4 *ngSwitchDefault> Invalid Name</h4>
					</div>
					
					<ul *ngFor = "let name of names">
						<li>{{name.name}} {{name.surname}}</li>
					</ul>
					
					<h3 [ngClass]="{classOne: cone, classTwo: ctwo}"> This is ngClass Example</h3>

					<p [ngStyle]="{'font-style':style, 'font-size': size}">This is ngStyle example</p>
					`,
	styles: [`
						h4{
							color: red;
						}
						.myClass{
							color: green;
						}
						.classOne{
							color: white;
						}
						.classTwo{
							background-color: black;
						}
	`]
})

export class TutorialsComponent {
	public title = "Maimit Tutorials";
	public imagelink = "http://lorempixel.com/400/200";
	public applyClass = true;
	public applyBlue = true;
	onClick(name){
		console.log(name);
	}
	public fname;
	public lname;
	public showElement = true;
	public uname = "chintu";

	public names =  [{"name": "Maimit", "surname": "Patel"},{"name": "Chintu", "surname": "Patel"}];
	public cone = true;
	public ctwo = true;
	public style = "italic";
	public size = "30px";
 }