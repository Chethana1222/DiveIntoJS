import "rxjs/Rx";
import { Observable } from "rxjs/Observable"

var  obsevableObj:Observable<number> = Observable.from([23,43,54,34,76,889]);

obsevableObj.subscribe((data:number)=>{
    console.log(data)
},(err)=>{console.log(err);
},()=>{
    console.log("Task Completed successfully");
});