import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyInr'
})
export class CurrencyInrPipe implements PipeTransform {

  transform(value: any) {
    var currencySymbol = '₹';
    var result = value.toString().split('.');

    var lastThree = result[0].substring(result[0].length - 3);
    var otherNumbers = result[0].substring(0, result[0].length - 3);
    if (otherNumbers != '')
      lastThree = ',' + lastThree;
    var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    if (result.length > 1) {
      output += "." + result[1];
    }

    return currencySymbol + output;
    console.log(value);
  }
}
