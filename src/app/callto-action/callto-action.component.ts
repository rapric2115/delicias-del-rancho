import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-callto-action',
  templateUrl: './callto-action.component.html',
  styleUrls: ['./callto-action.component.css']
})
export class CalltoActionComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
