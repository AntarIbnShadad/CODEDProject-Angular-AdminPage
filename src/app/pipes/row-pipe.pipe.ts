import { Pipe, PipeTransform } from '@angular/core';
import { ImageLink } from '../data/users';

@Pipe({
  name: 'rowPipe',
  standalone: true
})
export class RowPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value === undefined){
      return ""
    }
    if(value instanceof Date){
      return (<Date>value).toDateString()
    }
    if(this.instanceOfImageLink(value)){
      return `<img class="profileImg" src ="${value.imageLink}" >`
    }
    return ""+ value
  }
  instanceOfImageLink(obj: any): obj is ImageLink {
    return(
      typeof obj === 'object'&&
      obj !== null &&
      'imageLink' in obj &&
      typeof (obj as any).imageLink === 'string'
    )
}

}
