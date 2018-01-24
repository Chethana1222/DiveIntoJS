import {Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URLS } from '../constants/urls.constants';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Todo} from '../models/todo';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class TodoService{
    constructor(private http:Http){
        
    }
    
    getAllTodos():Observable<Todo[]>{
        return this.http.get(URLS.todoURL)
        .map((response:Response)=> response.json() as Todo[]);
    }

    addTodo(todo: Todo): Observable<Todo> {
        let bodyString = JSON.stringify(todo);
      //  let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(URLS.todoURL, bodyString,options)
            .map((response: Response) => {
                return response.json() as Todo;
            })
    }
    
}