import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'confirmation-sheet',
  templateUrl: './confirmation-sheet.component.html',
  styleUrls: ['./confirmation-sheet.component.css']
})
export class ConfirmationSheetComponent implements OnInit {

  @Input()
  public confirmationText: String
  @Output()
  confirm = new EventEmitter()
  @Output()
  cancel = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  public raiseConfirm(): void {
    this.confirm.emit()
  }

  public raiseCancel(): void {
    this.cancel.emit()
  }

}
