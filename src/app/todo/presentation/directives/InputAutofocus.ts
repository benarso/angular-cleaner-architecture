import {Directive, OnInit, ElementRef, AfterViewInit, Input} from '@angular/core';

@Directive({
    selector: '[appInputAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

    @Input() shouldFocus: boolean;

    constructor(private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        if (this.shouldFocus) {
            this.elementRef.nativeElement.focus();
        }
    }
}
