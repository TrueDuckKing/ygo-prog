import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sortName',
  standalone: true
})
export class SortNamePipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.sort((a, b) => {
        return a.name == b.name ? 0 : a.name > b.name ? 1 : -1
      }
    )
  }
}
