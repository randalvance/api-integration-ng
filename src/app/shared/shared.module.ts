import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { WizardStepComponent } from './components/wizard/wizard-step.component';

@NgModule({
    declarations: [ 
        LoaderComponent,
        WizardComponent,
        WizardStepComponent
    ],
    imports: [ 
        BrowserModule, 
        CommonModule
    ],
    exports: [
        LoaderComponent,
        WizardComponent,
        WizardStepComponent
    ]
})
export class SharedModule {

}
