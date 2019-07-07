import { Component } from '@angular/core';
import { Factory } from "../../models";
import { FactoryData } from "../../@core/data/factories"
@Component({
  selector: 'ngx-factory',
  templateUrl: './factory.component.html',
  styleUrls : ['factory.component.css']
})
export class FactoryComponent {
  // public factory: Factory[];
  // constructor(private factoryData: FactoryData) {}
  // addFactory(){
  //   window.alert('You will soon be able to add a factory that way')
  // }

  // ngOnInit() {
  //   this.factoryData
  //     .getFactories()
  //     .subscribe(factories => (this.factory = factories));
  // }
}
