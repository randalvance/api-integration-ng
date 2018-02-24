import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardComponent } from './components/wizard/wizard.component';
import { WizardStepComponent } from './components/wizard/wizard-step.component';

@NgModule({
    declarations: [ 
        WizardComponent,
        WizardStepComponent
    ],
    imports: [ 
        BrowserModule, 
        CommonModule
    ],
    exports: [
        WizardComponent,
        WizardStepComponent
    ]
})
export class SharedModule {

}
