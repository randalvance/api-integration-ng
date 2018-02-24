import { Component, ContentChildren, Input, QueryList, AfterContentInit, OnInit } from "@angular/core";
import { WizardStepComponent } from "./wizard-step.component";

@Component({
  selector: "app-wizard",
  templateUrl: "wizard.component.html",
  styleUrls: ["wizard.component.scss"]
})
export class WizardComponent implements AfterContentInit, OnInit {

  @ContentChildren(WizardStepComponent) wizardSteps: QueryList<WizardStepComponent>;

  private _currentStep: number;
  private _wizardStepsArray: Array<WizardStepComponent>;

  @Input() private get currentStep(): number {
    return this._currentStep || 1;
  }

  private get wizardStepsArray() {
    if (!this._wizardStepsArray) {
      this._wizardStepsArray = this.wizardSteps.toArray();
    }
    return this._wizardStepsArray;
  }

  private set currentStep(value) {
    if (value < 1 || value > this.wizardStepsArray.length) {
      if (this.wizardStepsArray.length === 1) {
        throw new Error("There is only one step.");
      }
      throw new Error(`Valid step numbers are from ${1} to ${this.wizardStepsArray.length}`);
    }

    for(let i = 0; i < this.wizardStepsArray.length; i++) {
      this.wizardStepsArray[i].isActive = i == value - 1;
    }

    this._currentStep = value;
  }

  private get currentIndex() {
    return this.currentStep - 1;
  }
  private set currentIndex(value) {
    this.currentStep = value + 1;
  }

  private maxIndexVisited: number;

  ngAfterContentInit(): void {
    if (!this.wizardSteps || this.wizardSteps.length === 0) {
      throw new Error("At least one step is required.");
    };

    this.currentStep = 1;
    this.maxIndexVisited = this.currentIndex;
  }

  ngOnInit(): void {
  }

  navigateToIndex(index: number) {
    if (index <= this.maxIndexVisited) {
      this.currentIndex = index;
    }
  }

  next() {
    if (this.currentStep < this.wizardSteps.length) {
      this.currentStep++;
      if (this.currentIndex > this.maxIndexVisited) {
        this.maxIndexVisited++;
      }
    }
  }
}