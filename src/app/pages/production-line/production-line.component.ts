import { Component, OnInit } from '@angular/core';
import { ProductionLine } from '../../models';
import { ProductionLineService } from '../../@core/services/production-line.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-production-line',
  templateUrl: './production-line.component.html',
  styleUrls : ['production-line.component.scss'],
  providers: [ProductionLineService]
})

export class ProductionLineComponent implements OnInit  {

  public productionLines : ProductionLine[];
  source : LocalDataSource;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Id',
        editable: false,
        addable: false,
      },
      name: {
        title: 'Production Line',
      },
      //factory: {
       // title: 'Factory',
      //},
    },
  };


  ngOnInit(){}

  constructor(private productionLineService: ProductionLineService) {
    this.source = new LocalDataSource();

    this.productionLineService.getProductionLines().subscribe((data) => {
      this.source.load(data);
    });
  }

  async onConfirmSave(event) {
    const productionLine: ProductionLine = event.newData;
    productionLine.id = Math.max(...(await this.source.getAll()).map((x) => x.id)) + 1;
    
    // Send to API to save record and the resolve
    this.productionLineService.createProductionLine(productionLine).subscribe((res) => {
      event.confirm.resolve(productionLine);
    });
  }

  onEditConfirm(event) {
    // Send to API to edit the record and then resolve
   // event.confirm.resolve(event.newData);
  const production_line : ProductionLine = event.newData;
   this.productionLineService.updateProductionLine(production_line).subscribe((res) => {
    event.confirm.resolve(production_line);
  });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // Send to API to remove and then resolve
      const id : number = event.data.id;
      this.productionLineService.deleteProductionLine(id).subscribe((res)=>{
        event.confirm.resolve(id);
      })
      
    } else {
      event.confirm.reject();
    }
  }

}
