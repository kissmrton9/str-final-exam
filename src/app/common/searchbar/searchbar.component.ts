import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { Sorter } from 'src/app/model/sorter';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  //@Output() changeFilter: EventEmitter<Filter> = new EventEmitter();
  //@Input() columns: Columns[];

  //@Input() usedSortType: string | undefined;
  // @Output() filterChange = new EventEmitter<Filter>();
  // @Output() sorterChange = new EventEmitter<Sorter>();

  // phrase: string = '';
  // phrase2: string = '';
  // keys: string[] = [];
  selectedColumn: string = 'name';
  // selectedKeyForSearch: string = 'name';
  // sortKey: string = 'name';
  // sortAscend: boolean = true;


  constructor() { }

  ngOnInit(): void {
    
  }
  phrase:string ='';

  onChangePhrase(event: Event): void {

    this.phrase = (event.target as HTMLInputElement).value;
    // this.filterChange.emit(this.filter);
    //this.changeFilter.emit(this.filter);

  }
  // onChangePhrase2(event: Event): void {
  //   this.filter.phrase2 = (event.target as HTMLInputElement).value;
  //   // this.filterChange.emit(this.filter);
  //   this.changeFilter.emit(this.filter);

  // }


  // selectKeyForSearch(column: Columns): void {
  //   this.filter.selectedKeyForSearch = column.name;
  //   this.selectedColumn = column;
  //   if (this.filter.selectedKeyForSearch !== 'price') {
  //     this.filter.phrase = '';
  //     this.filter.phrase2 = '';
  //   }
  //   this.changeFilter.emit(this.filter);

    // this.filterChange.emit(this.filter);
  //}

  //   selectColumnForSort(column: string): void {
  //     this.sorter.sortKey = column;
  //     //this.sorterChange.emit(this.sorter);
  // 
  //   }
  // 
  //   changeSortAscend(): void {
  //     this.sorter.sortAscend = !this.sorter.sortAscend;
  //     //this.sorterChange.emit(this.sorter);
  // 
  //   }

}
