import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader-container">
      <div class="loader">

      </div>
    </div>
  `,
  styleUrls: [
    './style-loader.css'
  ]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
