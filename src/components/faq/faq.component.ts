import {Component, Input, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  @Input('content') content: any = false;
  @Input('faqs') faqs: any = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChange){
    console.log('changes',changes);
  }

}
