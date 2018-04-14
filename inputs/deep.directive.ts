import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[mdbDeepDirective]',
})

export class DeepDirective implements AfterViewInit {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit() {
        this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
    }
}
