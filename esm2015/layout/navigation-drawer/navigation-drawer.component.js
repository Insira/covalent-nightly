/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Directive, Input, ContentChildren, forwardRef, Inject, QueryList, SecurityContext, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TdLayoutComponent } from '../layout.component';
import { tdCollapseAnimation } from '@covalent/core/common';
export class TdNavigationDrawerMenuDirective {
}
TdNavigationDrawerMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-menu]',
            },] }
];
export class TdNavigationDrawerToolbarDirective {
}
TdNavigationDrawerToolbarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-toolbar]',
            },] }
];
export class TdNavigationDrawerComponent {
    /**
     * @param {?} _layout
     * @param {?} _router
     * @param {?} _sanitize
     */
    constructor(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
    }
    /**
     * @return {?}
     */
    get menuToggled() {
        return this._menuToggled;
    }
    /**
     * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
     * @return {?}
     */
    get isMenuAvailable() {
        return this._drawerMenu ? this._drawerMenu.length > 0 : false;
    }
    /**
     * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
     * @return {?}
     */
    get isCustomToolbar() {
        return this._toolbar ? this._toolbar.length > 0 : false;
    }
    /**
     * Checks if there is a background image for the toolbar.
     * @return {?}
     */
    get isBackgroundAvailable() {
        return !!this._backgroundImage;
    }
    /**
     * backgroundUrl?: SafeResourceUrl
     *
     * image to be displayed as the background of the toolbar.
     * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
     * @param {?} backgroundUrl
     * @return {?}
     */
    set backgroundUrl(backgroundUrl) {
        if (backgroundUrl) {
            /** @type {?} */
            let sanitizedUrl = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
            this._backgroundImage = this._sanitize.sanitize(SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
        }
    }
    /**
     * @return {?}
     */
    get backgroundImage() {
        return this._backgroundImage;
    }
    /**
     * Checks if router was injected.
     * @return {?}
     */
    get routerEnabled() {
        return !!this._router && !!this.navigationRoute;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe((opened) => {
            if (!opened) {
                this._menuToggled = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    }
    /**
     * @return {?}
     */
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
        }
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this._layout.toggle();
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this._layout.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this._layout.close();
    }
}
TdNavigationDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-navigation-drawer',
                template: "<mat-toolbar [color]=\"color\"\n             [style.background-image]=\"backgroundImage\"\n             [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n             class=\"td-nagivation-drawer-toolbar\">\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div *ngIf=\"icon || logo || sidenavTitle\"\n          class=\"td-navigation-drawer-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\"\n        href\n        *ngIf=\"email || name\"\n        (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{email || name}}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-ms-flex-direction:column;flex-direction:column;height:auto!important;display:block!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:flex-start}:host mat-toolbar .td-navigation-drawer-menu-toggle{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-ms-flex:1;flex:1}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
            }] }
];
/** @nocollapse */
TdNavigationDrawerComponent.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutComponent),] }] },
    { type: Router, decorators: [{ type: Optional }] },
    { type: DomSanitizer }
];
TdNavigationDrawerComponent.propDecorators = {
    _drawerMenu: [{ type: ContentChildren, args: [TdNavigationDrawerMenuDirective,] }],
    _toolbar: [{ type: ContentChildren, args: [TdNavigationDrawerToolbarDirective,] }],
    sidenavTitle: [{ type: Input, args: ['sidenavTitle',] }],
    icon: [{ type: Input, args: ['icon',] }],
    logo: [{ type: Input, args: ['logo',] }],
    color: [{ type: Input, args: ['color',] }],
    navigationRoute: [{ type: Input, args: ['navigationRoute',] }],
    backgroundUrl: [{ type: Input, args: ['backgroundUrl',] }],
    name: [{ type: Input, args: ['name',] }],
    email: [{ type: Input, args: ['email',] }]
};
if (false) {
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._closeSubscription;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._menuToggled;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._backgroundImage;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._drawerMenu;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._toolbar;
    /**
     * sidenavTitle?: string
     * Title set in sideNav.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.sidenavTitle;
    /**
     * icon?: string
     *
     * icon name to be displayed before the title
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.icon;
    /**
     * logo?: string
     *
     * logo icon name to be displayed before the title.
     * If [icon] is set, then this will not be shown.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.logo;
    /**
     * color?: string
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, default is used.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.color;
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and sidenavTitle.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.navigationRoute;
    /**
     * name?: string
     *
     * string to be displayed as part of the navigation drawer sublabel.
     * if [email] is not set, then [name] will be the toggle menu text.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.name;
    /**
     * email?: string
     *
     * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
     * if [email] and [name] are not set, then the toggle menu is not rendered.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.email;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._layout;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._router;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._sanitize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvbGF5b3V0LyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi1kcmF3ZXIvbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFxQixVQUFVLEVBQUUsTUFBTSxFQUNuRixTQUFTLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUE4QixZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUs1RCxNQUFNLE9BQU8sK0JBQStCOzs7WUFIM0MsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7O0FBUUQsTUFBTSxPQUFPLGtDQUFrQzs7O1lBSDlDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2FBQzNDOztBQVdELE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQWlIdEMsWUFBaUUsT0FBMEIsRUFDM0QsT0FBZSxFQUMzQixTQUF1QjtRQUZzQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMzRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFoSG5DLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBZ0hRLENBQUM7Ozs7SUE3Ry9DLElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7OztJQVNELElBQUksZUFBZTtRQUNqQixP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U0FBQyxrQ0FBa0M7MkJBMkJsRCxLQUFLLFNBQUMsY0FBYzttQkFPcEIsS0FBSyxTQUFDLE1BQU07bUJBUVosS0FBSyxTQUFDLE1BQU07b0JBUVosS0FBSyxTQUFDLE9BQU87OEJBT2IsS0FBSyxTQUFDLGlCQUFpQjs0QkFRdkIsS0FBSyxTQUFDLGVBQWU7bUJBbUJyQixLQUFLLFNBQUMsTUFBTTtvQkFRWixLQUFLLFNBQUMsT0FBTzs7OztJQXRHZCx5REFBeUM7O0lBQ3pDLG1EQUFzQzs7SUFDdEMsdURBQW9DOztJQU1wQyxrREFBMEc7O0lBRTFHLCtDQUE2Rzs7Ozs7O0lBMkI3RyxtREFBNEM7Ozs7Ozs7SUFPNUMsMkNBQTRCOzs7Ozs7OztJQVE1QiwyQ0FBNEI7Ozs7Ozs7O0lBUTVCLDRDQUE4Qjs7Ozs7OztJQU85QixzREFBa0Q7Ozs7Ozs7O0lBMkJsRCwyQ0FBNEI7Ozs7Ozs7O0lBUTVCLDRDQUE4Qjs7SUFTbEIsOENBQStFOztJQUMvRSw4Q0FBbUM7O0lBQ25DLGdEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBPbkluaXQsIE9uRGVzdHJveSwgZm9yd2FyZFJlZiwgSW5qZWN0LFxuICAgICAgICAgUXVlcnlMaXN0LCBTZWN1cml0eUNvbnRleHQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2FmZVJlc291cmNlVXJsLCBTYWZlU3R5bGUsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTWF0RHJhd2VyVG9nZ2xlUmVzdWx0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZExheW91dENvbXBvbmVudCB9IGZyb20gJy4uL2xheW91dC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyB0ZENvbGxhcHNlQW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLW5hdmlnYXRpb24tZHJhd2VyLW1lbnVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSB7XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLW5hdmlnYXRpb24tZHJhd2VyLXRvb2xiYXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZSB7XG5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2aWdhdGlvbi1kcmF3ZXInLFxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogWyB0ZENvbGxhcHNlQW5pbWF0aW9uIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9jbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9tZW51VG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9iYWNrZ3JvdW5kSW1hZ2U6IFNhZmVTdHlsZTtcblxuICBnZXQgbWVudVRvZ2dsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnVUb2dnbGVkO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlKSBfZHJhd2VyTWVudTogUXVlcnlMaXN0PFRkTmF2aWdhdGlvbkRyYXdlck1lbnVEaXJlY3RpdmU+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZSkgX3Rvb2xiYXI6IFF1ZXJ5TGlzdDxUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlPjtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgW1RkTmF2aWdhdGlvbkRyYXdlck1lbnVEaXJlY3RpdmVdIGhhcyBjb250ZW50LlxuICAgKi9cbiAgZ2V0IGlzTWVudUF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZHJhd2VyTWVudSA/IHRoaXMuX2RyYXdlck1lbnUubGVuZ3RoID4gMCA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIFtUZE5hdmlnYXRpb25EcmF3ZXJUb29sYmFyRGlyZWN0aXZlXSBoYXMgY29udGVudC5cbiAgICovXG4gIGdldCBpc0N1c3RvbVRvb2xiYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2xiYXIgPyB0aGlzLl90b29sYmFyLmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgdG9vbGJhci5cbiAgICovXG4gIGdldCBpc0JhY2tncm91bmRBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fYmFja2dyb3VuZEltYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNpZGVuYXZUaXRsZT86IHN0cmluZ1xuICAgKiBUaXRsZSBzZXQgaW4gc2lkZU5hdi5cbiAgICovXG4gIEBJbnB1dCgnc2lkZW5hdlRpdGxlJykgc2lkZW5hdlRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGljb24/OiBzdHJpbmdcbiAgICpcbiAgICogaWNvbiBuYW1lIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlXG4gICAqL1xuICBASW5wdXQoJ2ljb24nKSBpY29uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGxvZ28/OiBzdHJpbmdcbiAgICpcbiAgICogbG9nbyBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGUuXG4gICAqIElmIFtpY29uXSBpcyBzZXQsIHRoZW4gdGhpcyB3aWxsIG5vdCBiZSBzaG93bi5cbiAgICovXG4gIEBJbnB1dCgnbG9nbycpIGxvZ286IHN0cmluZztcblxuICAvKipcbiAgICogY29sb3I/OiBzdHJpbmdcbiAgICpcbiAgICogdG9vbGJhciBjb2xvciBvcHRpb246IHByaW1hcnkgfCBhY2NlbnQgfCB3YXJuLlxuICAgKiBJZiBbY29sb3JdIGlzIG5vdCBzZXQsIGRlZmF1bHQgaXMgdXNlZC5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBuYXZpZ2F0aW9uUm91dGU/OiBzdHJpbmdcbiAgICpcbiAgICogb3B0aW9uIHRvIHNldCB0aGUgY29tYmluZWQgcm91dGUgZm9yIHRoZSBpY29uLCBsb2dvLCBhbmQgc2lkZW5hdlRpdGxlLlxuICAgKi9cbiAgQElucHV0KCduYXZpZ2F0aW9uUm91dGUnKSBuYXZpZ2F0aW9uUm91dGU6IHN0cmluZztcblxuICAvKipcbiAgICogYmFja2dyb3VuZFVybD86IFNhZmVSZXNvdXJjZVVybFxuICAgKlxuICAgKiBpbWFnZSB0byBiZSBkaXNwbGF5ZWQgYXMgdGhlIGJhY2tncm91bmQgb2YgdGhlIHRvb2xiYXIuXG4gICAqIFVSTCB1c2VkIHdpbGwgYmUgc2FuaXRpemVkLCBidXQgaXQgc2hvdWxkIGJlIGFsd2F5cyBmcm9tIGEgdHJ1c3RlZCBzb3VyY2UgdG8gYXZvaWQgWFNTLlxuICAgKi9cbiAgQElucHV0KCdiYWNrZ3JvdW5kVXJsJylcbiAgLy8gVE9ETyBBbmd1bGFyIGNvbXBsYWlucyB3aXRoIHdhcm5pbmdzIGlmIHRoaXMgaXMgdHlwZSBbU2FmZVJlc291cmNlVXJsXS4uIHNvIHdlIHdpbGwgbWFrZSBpdCA8YW55PiB1bnRpbCBpdHMgZml4ZWQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svaXNzdWVzLzI5NzdcbiAgc2V0IGJhY2tncm91bmRVcmwoYmFja2dyb3VuZFVybDogYW55KSB7XG4gICAgaWYgKGJhY2tncm91bmRVcmwpIHtcbiAgICAgIGxldCBzYW5pdGl6ZWRVcmw6IHN0cmluZyA9IHRoaXMuX3Nhbml0aXplLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIGJhY2tncm91bmRVcmwpO1xuICAgICAgdGhpcy5fYmFja2dyb3VuZEltYWdlID0gdGhpcy5fc2FuaXRpemUuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlNUWUxFLCAndXJsKCcgKyBzYW5pdGl6ZWRVcmwgKyAnKScpO1xuICAgIH1cbiAgfVxuICBnZXQgYmFja2dyb3VuZEltYWdlKCk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRJbWFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuYW1lPzogc3RyaW5nXG4gICAqXG4gICAqIHN0cmluZyB0byBiZSBkaXNwbGF5ZWQgYXMgcGFydCBvZiB0aGUgbmF2aWdhdGlvbiBkcmF3ZXIgc3VibGFiZWwuXG4gICAqIGlmIFtlbWFpbF0gaXMgbm90IHNldCwgdGhlbiBbbmFtZV0gd2lsbCBiZSB0aGUgdG9nZ2xlIG1lbnUgdGV4dC5cbiAgICovXG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogZW1haWw/OiBzdHJpbmdcbiAgICpcbiAgICogc3RyaW5nIHRvIGJlIGRpc3BsYXllZCBhcyBwYXJ0IG9mIHRoZSBuYXZpZ2F0aW9uIGRyYXdlciBzdWJsYWJlbCBpbiB0aGUgW3RvZ2dsZV0gbWVudSB0ZXh0LlxuICAgKiBpZiBbZW1haWxdIGFuZCBbbmFtZV0gYXJlIG5vdCBzZXQsIHRoZW4gdGhlIHRvZ2dsZSBtZW51IGlzIG5vdCByZW5kZXJlZC5cbiAgICovXG4gIEBJbnB1dCgnZW1haWwnKSBlbWFpbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcm91dGVyIHdhcyBpbmplY3RlZC5cbiAgICovXG4gIGdldCByb3V0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3JvdXRlciAmJiAhIXRoaXMubmF2aWdhdGlvblJvdXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0Q29tcG9uZW50KSkgcHJpdmF0ZSBfbGF5b3V0OiBUZExheW91dENvbXBvbmVudCxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Nhbml0aXplOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLl9sYXlvdXQuc2lkZW5hdi5vcGVuZWRDaGFuZ2Uuc3Vic2NyaWJlKChvcGVuZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghb3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX21lbnVUb2dnbGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2xvc2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVNZW51KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTWVudUF2YWlsYWJsZSkge1xuICAgICAgdGhpcy5fbWVudVRvZ2dsZWQgPSAhdGhpcy5fbWVudVRvZ2dsZWQ7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGlvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMubmF2aWdhdGlvblJvdXRlKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgdG9nZ2xlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0LnRvZ2dsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IG9wZW4gbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIG9wZW4oKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBjbG9zZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0LmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==