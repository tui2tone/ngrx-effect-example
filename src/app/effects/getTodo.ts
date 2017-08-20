import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as Act from '../actions/todo';

@Injectable()
export class GetTodoEffects {

  @Effect() todo$ = this.actions$.ofType(Act.GET_TODO)
    .map(toPayload)
    .debounceTime(2000)
    .mergeMap(payload => {
      return [
        new Act.GetTodoSuccess({
          data: [
            {
              text: "Todo 1"
            },
            {
              text: "Todo 2"
            },
            {
              text: "Todo 3"
            }
          ]
        })
      ]
    });

  constructor(
    private actions$: Actions
  ) {}
}
