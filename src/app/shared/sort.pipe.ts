import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.sort((a: any, b:any): number => {
        return a.name - b.name
      }
    )
  }
}
