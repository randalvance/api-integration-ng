import { Component, Input } from "@angular/core";
import { diPublic } from "@angular/core/src/render3/instructions";

@Component({
  selector: "app-wizard-step",
  templateUrl: "wizard-step.component.html"
})
export class WizardStepComponent {
  @Input() private title: string;
  @Input() public allowNavigate: boolean = true;

  public isActive: boolean = false;
}