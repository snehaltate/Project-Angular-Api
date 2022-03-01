import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value : any[], filterString: string, title:string): any[] {
    const result:any =[];
    if(!value || filterString==='' || title ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[title].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
