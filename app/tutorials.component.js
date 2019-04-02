"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "Maimit Tutorials";
        this.imagelink = "http://lorempixel.com/400/200";
        this.applyClass = true;
        this.applyBlue = true;
        this.showElement = true;
        this.uname = "chintu";
        this.names = [{ "name": "Maimit", "surname": "Patel" }, { "name": "Chintu", "surname": "Patel" }];
        this.cone = true;
        this.ctwo = true;
        this.style = "italic";
        this.size = "30px";
    }
    TutorialsComponent.prototype.onClick = function (name) {
        console.log(name);
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'maimit',
            template: "\n\t\t\t\t\t<h2>{{ title }}</h2>\n\t\t\t\t\t\n\t\t\t\t\t<h4>Header 4 form Tutorials Component</h4>\n\t\t\t\t\t<input type=\"text\" [(ngModel)] = \"fname\">\n\t\t\t\t\t<input type=\"text\" [(ngModel)] = \"lname\">\n\t\t\t\t\tFull name: {{fname}} {{lname}}<br><br>\n\t\t\t\t\t\n\t\t\t\t\t<img [src]=\"imagelink\">\n\t\t\t\t\t\n\t\t\t\t\t<h5 [class.myClass] = \"applyClass\">Apply Class</h5>\n\t\t\t\t\t\n\t\t\t\t\t<h5 [style.color] = \"applyBlue? 'blue' : 'orange'\" >This is style binding</h5>\n\t\t\t\t\t\n\t\t\t\t\t<button (click)=\"onClick(name.value)\">Click Me</button>\n\t\t\t\t\t<input type=\"text\" #name>\n\t\t\t\t\t\n\t\t\t\t\t<h3 *ngIf=\"showElement\">If Directive example</h3>\n\t\t\t\t\t\n\t\t\t\t\t<div [ngSwitch]=\"uname\">\n\t\t\t\t\t\t\t<h4 *ngSwitchWhen=\"'maimit'\">This is maimit</h4>\n\t\t\t\t\t\t\t<h4 *ngSwitchWhen=\"'chintu'\"> This is Chntu</h4>\n\t\t\t\t\t\t\t<h4 *ngSwitchDefault> Invalid Name</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<ul *ngFor = \"let name of names\">\n\t\t\t\t\t\t<li>{{name.name}} {{name.surname}}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t\t<h3 [ngClass]=\"{classOne: cone, classTwo: ctwo}\"> This is ngClass Example</h3>\n\n\t\t\t\t\t<p [ngStyle]=\"{'font-style':style, 'font-size': size}\">This is ngStyle example</p>\n\t\t\t\t\t",
            styles: ["\n\t\t\t\t\t\th4{\n\t\t\t\t\t\t\tcolor: red;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.myClass{\n\t\t\t\t\t\t\tcolor: green;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.classOne{\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.classTwo{\n\t\t\t\t\t\t\tbackground-color: black;\n\t\t\t\t\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map