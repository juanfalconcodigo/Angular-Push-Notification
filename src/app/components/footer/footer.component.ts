import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  anio:number;
  owner:string;
  constructor() { }

  ngOnInit(): void {
    this.anio=new Date().getFullYear();
    this.owner='Juan Diego Falcón Córdova';
  }

}
