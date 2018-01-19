import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdMenuComponent {
}
TdMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-menu',
                template: `<ng-content select="[td-menu-header]"></ng-content>
<mat-divider></mat-divider>
<div class="td-menu-content">
  <ng-content></ng-content>
</div>
<mat-divider></mat-divider>
<ng-content select="[td-menu-footer]"></ng-content>`,
                styles: [`:host {
  margin-top: -8px;
  margin-bottom: -8px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }

:host ::ng-deep [td-menu-header] {
  padding: 8px;
  text-align: center; }

:host ::ng-deep mat-list a[mat-list-item].mat-2-line,
:host ::ng-deep mat-list mat-list-item.mat-2-line,
:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line,
:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line,
:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line,
:host ::ng-deep mat-nav-list mat-list-item.mat-2-line,
:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line,
:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line {
  height: auto; }
  :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content,
  :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content,
  :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,
  :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content,
  :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content,
  :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content,
  :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,
  :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content {
    height: auto;
    padding: 8px; }
    :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,
    :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,
    :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,
    :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,
    :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,
    :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,
    :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,
    :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text {
      padding-right: 0; }
      [dir='rtl'] :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']
      :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']
      :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']
      :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']
      :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']
      :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']
      :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']
      :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text {
        padding-left: 0;
        padding-right: 16px; }
    :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine],
    :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine],
    :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine],
    :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine],
    :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine],
    :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine],
    :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine],
    :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine] {
      margin-top: 4px; }

.td-menu-content {
  max-height: calc(50vh);
  overflow-y: auto; }
`],
            },] },
];
/** @nocollapse */
TdMenuComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TD_MENU = [
    TdMenuComponent,
];
class CovalentMenuModule {
}
CovalentMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatMenuModule,
                    MatDividerModule,
                ],
                declarations: [
                    TD_MENU,
                ],
                exports: [
                    TD_MENU,
                ],
            },] },
];
/** @nocollapse */
CovalentMenuModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CovalentMenuModule, TdMenuComponent };
//# sourceMappingURL=covalent-core-menu.js.map
