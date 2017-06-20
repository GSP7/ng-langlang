import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckboxdirective]'
})
export class CheckboxdirectiveDirective {
  public checkboxEl: any;
  private _id: string;
  @Input() set setId(id: string) {
      this._id = id;
  }

  get getId() {
      return this._id;
  }

  constructor(private el: ElementRef) {
    this.checkboxEl = el.nativeElement;
  }

}
