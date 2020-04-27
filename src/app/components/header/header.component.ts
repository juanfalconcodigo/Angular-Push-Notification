import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Output() isCollapsedOutput:EventEmitter<boolean>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitCollapsed(){
    this.isCollapsedOutput.emit(!this.isCollapsed);
  }

  

}
