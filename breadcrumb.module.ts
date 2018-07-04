import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './standard-breadcrumb/breadcrumb.component';  

@NgModule({
    declarations   : [
        BreadcrumbComponent,
    ],
    imports        : [
        CommonModule,
        RouterModule
    ],
    exports        : [
        BreadcrumbComponent      
    ],
    providers      : [
    ]
})

export class BreadcurmbModule
{

}
