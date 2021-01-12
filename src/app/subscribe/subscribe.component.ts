import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscriberEmail:string = 'hello@domain.com'

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('form submitted' + this.subscriberEmail)
  }

}
