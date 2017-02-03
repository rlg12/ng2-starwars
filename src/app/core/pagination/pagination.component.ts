import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() numPaginas:number;
  @Input() paginaAct: number;
  pageList: number[] = [];

  constructor() { }

  ngOnInit() {
    for(let i = 1 ; i <= this.numPaginas;i++){
      this.pageList.push(i);
    }
  }
}
