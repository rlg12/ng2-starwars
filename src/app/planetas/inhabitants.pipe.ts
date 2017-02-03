import { Pipe, PipeTransform } from '@angular/core';

const ONE_BILLION = 100000000000;
const ONE_MILLION = 1000000;
const ONE_THOUSAND =1000;


  @Pipe({
  name: 'inhabitants'
})
export class InhabitantsPipe implements PipeTransform {



  transform(value: any, args?: any): any {
    let result;

    if(+value >= ONE_BILLION){
      result = (+value/ONE_BILLION).toLocaleString() + 'B';
    } else if(+value >= ONE_MILLION){
      result = (+value/ONE_MILLION).toLocaleString() + 'M';
    } else if(+value >= ONE_THOUSAND){
      result = (+value/ONE_THOUSAND).toLocaleString() + 'K';
    } else if(+value >= 0){
      result = +value;
    } else {
      result = "Ni dios";
    }

   return result;
  }

}
