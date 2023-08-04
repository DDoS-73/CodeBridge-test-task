import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { updateText } from '../../store/search-text/search-text.actions';
import { selectSearchText } from '../../store/search-text/search-text.selectors';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  searchText = '';
  searchText$ = this.store.select(selectSearchText);
  inputChange = new Subject<string>();

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.inputChange.pipe(debounceTime(500)).subscribe(searchText => {
        this.store.dispatch(
          updateText({searchText})
        );
      }
    );
    this.searchText$.subscribe(value => this.searchText = value);
  }

  onInput() {
    this.inputChange.next(this.searchText);
  }
}
