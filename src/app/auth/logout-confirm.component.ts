import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-logout-confirm',
    template: `
                <mat-dialog-content>
                    <p>Do you want logout?</p>
                </mat-dialog-content>
                <mat-dialog-actions>
                    <button mat-button [mat-dialog-close]="true">Yes</button>
                    <button mat-button [mat-dialog-close]="false">No</button>
                </mat-dialog-actions>`,
})

export class LogoutConfirmComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passData: any) {}
}