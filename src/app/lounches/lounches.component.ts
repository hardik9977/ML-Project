import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lounches',
  templateUrl: './lounches.component.html',
  styleUrls: ['./lounches.component.css']
})
export class LounchesComponent implements OnInit {

  @Input() lounches;
  constructor() { }

  ngOnInit(): void {
    console.log(this.lounches);
  }

}
