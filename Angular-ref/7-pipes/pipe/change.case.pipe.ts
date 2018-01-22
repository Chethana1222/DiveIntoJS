import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'changecase'
})
export class ChangeCasePipe implements PipeTransform {
    transform(data: string, toWhichCase:string): string{
        var result = data;
        if(toWhichCase.toLowerCase() == 'upper')
            result = data.toUpperCase();
        if(toWhichCase.toLowerCase() == 'lower')
            result = data.toLowerCase();
        if(toWhichCase.toLowerCase() == 'title')
            result = data.toLowerCase().replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase());
        return result;
    }
}