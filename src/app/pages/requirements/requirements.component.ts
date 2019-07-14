import { Component, OnInit } from '@angular/core';
import { Requirement } from '../../models';

@Component({
  selector: 'ngx-requirements',
  templateUrl: './requirements.component.html',
  styleUrls : ['requirements.component.css']
})

export class RequirementsComponent implements OnInit  {
  constructor() {}

  public Requirements : Requirement[];
  ngOnInit(){}
  getSubbusiness(){}
  getFactory(){}
  getOperation(){}
  getProdline(){}
  deleteRequirement(id:number){}
}
