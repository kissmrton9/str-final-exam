import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: any[], phrase: string, key: string = ''): any {
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    // if (key === 'price' || key === 'amount') {
    //   if (!isNaN(parseInt(phrase)) || !isNaN(parseInt(phrase2))) {
    //     if (!isNaN(parseInt(phrase)) && !isNaN(parseInt(phrase2))) {
    //       return value.filter(item => parseInt(phrase) <= parseInt(item[key]) && parseInt(phrase2) >= parseInt(item[key]));
    //     }
    //     if (!isNaN(parseInt(phrase))) {
    //       return value.filter(item => parseInt(phrase) <= parseInt(item[key]));
    //     }
    //     if (!isNaN(parseInt(phrase2))) {
    //       return value.filter(item => parseInt(phrase2) >= parseInt(item[key]));
    //     }
    //   }
    //   else {
    //     return value;
    //   }
    // }

    //const arr = key.split('.')[0].split('[')[0];
    //const key2 = 'item' + "['" + arr + "']" + key.replace(arr, '');

    phrase = phrase.toLowerCase();
    return value.filter(item => key.toLowerCase().includes(phrase));

  }
}
