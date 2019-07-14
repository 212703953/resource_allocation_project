import { Component, OnInit } from '@angular/core';
import { Factory } from "../../models";
import { FactoryService } from '../../@core/mock/factory.service';
@Component({
  selector: 'ngx-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['factory.component.css']
})
export class FactoryComponent implements OnInit {
  constructor(private factoryService: FactoryService) { }

  public factories: Factory[];

  ngOnInit() {
    this.factoryService
      .getFactories()
      .subscribe(factories => (this.factories = factories));
  }

  addFactory() {
    window.alert('You will soon be able to add a factory that way')
  }

  deleteFactory(id: number) {
    let factory = this.factories.find(f => f.id == id);
    this.factories.splice(this.factories.indexOf(factory), 1);
  }

  editFactory(id: number) {

  }

}
