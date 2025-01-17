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
import { ComponentHarness } from '@angular/cdk/testing';
import { MatIconHarness } from '@angular/material/icon/testing';

export class ApiCreationStepHarness extends ComponentHarness {
  static hostSelector = 'api-creation-step';

  protected getIconElement = this.locatorForOptional(MatIconHarness);
  protected getStepNumberElement = this.locatorFor('.api-creation-step__number');
  protected getStepTitleElement = this.locatorFor('.api-creation-step__title');

  async getStepNumber(): Promise<string> {
    return this.getStepNumberElement().then((elt) => elt.text());
  }
  async getStepTitle(): Promise<string> {
    return this.getStepTitleElement().then((elt) => elt.text());
  }
  async hasStepIcon(): Promise<boolean> {
    return this.getIconElement().then((icon) => icon != null);
  }
  async getStepIconName(): Promise<string> {
    return this.getIconElement().then((icon) => {
      return icon.getName();
    });
  }
}
