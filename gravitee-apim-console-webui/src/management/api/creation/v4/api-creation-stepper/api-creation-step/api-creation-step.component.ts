/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'api-creation-step',
  template: require('./api-creation-step.component.html'),
  styles: [require('./api-creation-step.component.scss')],
})
export class ApiCreationStepComponent implements OnChanges {
  @Input()
  public stepNumber: number;

  @Input()
  public currentStep: number;

  public stepStatus: 'INACTIVE' | 'ACTIVE' | 'FILLED';

  private getStepStatus() {
    if (this.stepNumber < this.currentStep) return 'FILLED';
    if (this.stepNumber === this.currentStep) return 'ACTIVE';
    return 'INACTIVE';
  }

  ngOnChanges(): void {
    this.stepStatus = this.getStepStatus();
  }
}
