
declare const marked: any;
import { Pipe, PipeTransform } from '@angular/core';
import {isUndefined} from "util";

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if( isUndefined(value) === true || value === '' ) return '';
    return marked(value);
  }

}
