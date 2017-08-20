import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom'
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as Act from '../actions/todo';
import * as fromStore from '../reducers';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetTodoEffects {

  @Effect() todo$ = this.actions$.ofType(Act.GET_TODO)
    .map(toPayload)
    .withLatestFrom(this.store$)
    .mergeMap(([ payload, store ]) => {
      const userId = store.todo.userId

      return this.http$
        .get(`/todos?userId=${userId}`)
        .map(data => {
          return [
            new Act.GetTodoSuccess({ data: data })
          ]
        })
        .catch((error) => {
          return [
            new Act.GetTodoFailed({ error: error })
          ]
        })
    });


  constructor(
    private actions$: Actions,
    private http$: HttpClient,
    private store$: Store<fromStore.State>
  ) {}
}
