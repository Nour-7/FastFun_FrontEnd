import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, term?: any): any {
    if (items === undefined || term === undefined || (term[0] == 'All' && term[1] == 'Any')) return items;

    if (term[0] == 'All') {
      return items.filter(function(item){
         return item.name.toLowerCase().includes(term[1].toLowerCase());
      })
    }

    if (term[1] == 'Any') {
      return items.filter(function(item){
         return item.category.toLowerCase().includes(term[0].toLowerCase());
      })
    }

    return items.filter(function(item){
      return item.Location.toLowerCase().includes(term[1].toLowerCase());
    })
  }

}
