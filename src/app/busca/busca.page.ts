import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  constructor() { }

  items = [
    {
      imagem: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      descricao: 'Produto01',
      valor: 109.00
    },
    {
      imagem: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      descricao: 'Produto02',
      valor: 3100.00
    }
  ];

  ngOnInit() {
  }

}
