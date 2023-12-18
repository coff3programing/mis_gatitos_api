import { ElementRef, Renderer2 } from "@angular/core";
import { ValidationErrors } from "@angular/forms";
export declare class FormErrorDirective {
    private elementRef;
    private renderer;
    private _errors;
    private _dirty;
    private _touched;
    private _nativeElement;
    set touched(value: boolean);
    set dirty(value: boolean);
    set errors(value: ValidationErrors | null);
    constructor(elementRef: ElementRef, renderer: Renderer2);
    setMessage(): void;
}
