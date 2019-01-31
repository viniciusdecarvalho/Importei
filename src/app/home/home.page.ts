import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  links = 'apple,celular,iphone,imac,ps4,tv,carregador,capinhas,computador,ipad,itouch,sansumg'.split(',');

  linha1  = 'apple,celular,iphone'.split(',');
  linha2  = 'imac,ps4,tv'.split(',');
  linha3  = 'carregador,capinhas,computador'.split(',');
  linha4  = 'ipad,itouch,sansumg'.split(',');

  ngOnInit() {
  }

}
