import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-p1';

  public form: FormGroup = null;

  constructor(formbBuilder: FormBuilder) {
    this.form = formbBuilder.group({ yesNoAnswer: ['no'] });
  }

  public submit() {
    console.log(this.form.value);
  }
}
