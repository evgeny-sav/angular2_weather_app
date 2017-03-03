import { Directive, forwardRef } from "@angular/core";
import { NG_VALIDATORS, Validator, FormControl } from "@angular/forms";
import { validateSearch } from './search.validator';

@Directive({
  selector: '[validateSearch][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SearchValidatorDirective),
      multi: true
    }
  ]
})

export class SearchValidatorDirective implements Validator{
  validate(control: FormControl) {
    return validateSearch(control);
  }
}
