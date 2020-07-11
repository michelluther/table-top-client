import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { ActualAttribute } from 'app/domain/actualAttribute';
import { Hero } from 'app/domain/hero';
import { EditAttributeComponent } from 'app/edit-attribute/edit-attribute.component';

@Component({
  selector: 'edit-dialog',
  providers: [EditAttributeComponent],
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { 

  }

  ngOnInit() {
  }
  
  public editAttribute(attribute: ActualAttribute, hero:Hero) {
    this.dialog.open(EditAttributeComponent, {data: {attribute: attribute}})
  }

}
