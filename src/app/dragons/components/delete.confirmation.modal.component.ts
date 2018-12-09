import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'delete-confirmation-modal',
  templateUrl: 'delete.confirmation.modal.component.html',
})
export class DeleteConfirmationModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, _id: string }
  ) { }

  onNoClick(): void {
    this.dialogRef.close({delete: false});
  }

  onYesClick(): void {
    this.dialogRef.close({delete: true});
  }

}