import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';

export interface IDialogComponent<TData = any, TResult = any> {
  dialog: MatDialogRef<any, TResult>;
  data: TData;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private matDialog: MatDialog) {}

  show<TData, TResult>(
    component: ComponentType<IDialogComponent<TData, TResult>>,
    data: TData
  ): Promise<TResult | undefined> {
    const conf = new MatDialogConfig<TData>();
    conf.data = data;

    return firstValueFrom(this.matDialog.open(component, conf).afterClosed());
  }
}
