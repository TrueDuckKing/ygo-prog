import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleShow() {
    this.isOpen = !this.isOpen;
  }
}
