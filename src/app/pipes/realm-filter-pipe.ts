import {Pipe} from '@angular/core';

@Pipe({
  name: 'realmFilterPipe'
})
export class realmFilterPipe {

  transform(value, args) {
    let realmFilter = args
    return value.filter(realm => {
      return realm.locale == realmFilter;
    });
  }

}
