import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit {
  dataForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      name : new FormControl(null)
    });
  }

}
