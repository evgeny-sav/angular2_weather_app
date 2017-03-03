import { FormControl } from '@angular/forms';

export function validateSearch(control: FormControl): {[key: string]: boolean} {
  let SEARCH_REGEXP = new RegExp(/^[A-Za-z][A-Za-z0-9]*$/);
  return SEARCH_REGEXP.test(control.value) ? null : {'invalidSearch': true};
}
