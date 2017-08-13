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

  total: Observable<any>;
  todos: Observable<any>;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.total = store.select(fromStore.getTotalTodo);
    this.todos = store.select(fromStore.getTodos);
  }

  ngOnInit() {
  }

  addTodo(text) {
    this.store.dispatch(new todoAction.AddTodo(text));
  }

  removeTodo(index) {
    this.store.dispatch(new todoAction.RemoveTodo(index));
  }

  doneTodo(index) {
    this.store.dispatch(new todoAction.DoneTodo(index));
  }
}
