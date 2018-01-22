import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { URLS } from '../constants/urls.constants';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Todo} from '../models/todo';


@Injectable()
export class TodoService{
    constructor(private http:Http){
        
    }
    
    getAllTodos():Observable<Todo[]>{
        return this.http.get(URLS.todoURL)
        .map((response)=> response.json() as Todo[]);
    }

//     /** GET heroes from the server */
// getAllTodos (): Observable<Todo[]> {
//   return this.http.get(URLS.todoURL)
//     .pipe(
//       tap(Todos => this.log(`fetched heroes`)),
//       catchError(this.handleError('getHeroes', []))
//     );
// }

    
}