// user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as UserActions from './user.actions';
import { User } from 'src/app/core/model';
import { ApiService } from 'src/app/features/services/api.service';

@Injectable()
export class UserEffects {
  loadUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserData),
      mergeMap(() =>
        this.ApiService.getUser().pipe(
          map((user : User ) =>
            UserActions.loadUserDataSuccess({ user })
          ),
          catchError(() => of())
        )
      )
    )
  );


  constructor(private actions$: Actions, private ApiService: ApiService) {}
}
