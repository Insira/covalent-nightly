import { Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
export interface ILayoutTogglable {
    opened: boolean;
    sidenav: MatSidenav;
    toggle(): Promise<void>;
    open(): Promise<void>;
    close(): Promise<void>;
}
export declare abstract class LayoutToggle implements AfterViewInit, OnDestroy {
    protected _layout: ILayoutTogglable;
    private _renderer;
    private _elementRef;
    private _toggleSubs;
    private _initialized;
    private _disabled;
    private _hideWhenOpened;
    disabled: boolean;
    /**
     * hideWhenOpened?: boolean
     * When this is set to true, the host will be hidden when
     * the sidenav is opened.
     */
    hideWhenOpened: boolean;
    constructor(_layout: ILayoutTogglable, _renderer: Renderer2, _elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Listens to host click event to trigger the layout toggle
     */
    clickListener(event: Event): void;
    abstract onClick(): void;
    private _toggleVisibility();
}
