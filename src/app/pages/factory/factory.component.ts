import { Component, OnInit } from '@angular/core';
import { Factory } from "../../models";
import { FactoryData } from "../../@core/data/factories"
import { UserService } from '../../@core/mock/users.service';
@Component({
  selector: 'ngx-factory',
  templateUrl: './factory.component.html',
  styleUrls : ['factory.component.css']
})
export class FactoryComponent implements OnInit  {
  constructor(private userService: UserService) {}

  public factories: Factory[];

   ngOnInit() {
    this.userService
      .getFactories()
      .subscribe(factories => (this.factories = factories));
  }

  addFactory(){
    window.alert('You will soon be able to add a factory that way')
   }

}
