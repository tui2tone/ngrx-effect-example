import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from './reducers';
import * as todoAction from './actions/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Observable<any>;
  isLoading: Observable<any>;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.isLoading = store.select(fromStore.getIsLoading);
    this.todos = store.select(fromStore.getTodos);
  }

  ngOnInit() {
    this.store.dispatch(new todoAction.GetTodo());
  }
}
