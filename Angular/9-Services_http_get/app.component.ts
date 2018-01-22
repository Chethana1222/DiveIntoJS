import { Component,Inject,OnInit } from '@angular/core';
import {CalculatorService } from './services/calculator.service';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [TodoService]
   
})
export class AppComponent implements OnInit{

    todos:Todo[];

    constructor(private calcService:CalculatorService,
        @Inject('square') private sqr:Function,
        @Inject('email') private mail:string,
        @Inject(TodoService) private todoService:TodoService){
       //this.calcService = new CalculatorService();
       console.log(this.calcService.add(5,6));
       console.log(this.sqr(5));
       console.log(this.mail);
       this.todos = [];
    }

    ngOnInit(){
        this.todoService.getAllTodos().subscribe((todoList:Todo[])=>{
            this.todos = todoList;
        });
    }
   
}