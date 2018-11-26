import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:  //any valid HTML!
    ` <div>
        <h1>{{pageTitle}}        </h1>
        <div>Consistently obtuse. We're <em>more</em> than right.</div>
        <pm-products></pm-products>
      </div>`
})

export class AppComponent {
  pageTitle: string = "Heavenly Product Management"
} 