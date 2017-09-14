import { FormControl } from '@angular/forms';

export function numberValidator(control: FormControl): { [s: string]: boolean } {
    const reg = /^\d+(\.\d+)?$/;
    const str = <string>control.value;
    if (!reg.test(str)) {
        return { isnumber: true };
    }
}
