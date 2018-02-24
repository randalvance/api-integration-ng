import { Component, Input } from "@angular/core";

@Component({
  selector: "app-wizard-step",
  templateUrl: "wizard-step.component.html"
})
export class WizardStepComponent {
  @Input() private title: string;

  public isActive: boolean = false;
}