import { Component, OnInit } from '@angular/core';
import { Requirement } from '../../models';
import { RequirementService } from '../../@core/mock/requirement.service';

@Component({
  selector: 'ngx-requirements',
  templateUrl: './requirements.component.html',
  styleUrls : ['requirements.component.css']
})

export class RequirementsComponent implements OnInit  {
  constructor(private requirementService: RequirementService) {}

  public requirements : Requirement[];
  ngOnInit(){
    this.requirementService
    .getRequirements()
    .subscribe(requirements => (this.requirements = requirements));
  }
  getSubbusiness(){}
  getFactory(){}
  getOperation(){}
  getProdline(){}
  deleteRequirement(id:number){}
  editRequirement(){}
}
