import { Component, OnInit } from "@angular/core";
import { Factory } from "../../models";
import { FactoryService } from "../../@core/services/factory.service";
import { LocalDataSource } from "ng2-smart-table";
@Component({
  selector: "ngx-factory",
  templateUrl: "./factory.component.html",
  styleUrls: ["factory.component.scss"],
})
export class FactoryComponent implements OnInit {
  public factories: Factory[];
  source: LocalDataSource;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "Id",
        editable: false,
        addable: false,
      },
      name: {
        title: "Name",
      },
      business: {
        title: "Business",
      },
      shift1: {
        title: "Shift1",
      },
      shift2: {
        title: "Shift2",
      },
      shift3: {
        title: "Shift3",
      },
    },
  };

  ngOnInit() {}

  constructor(private factoryService: FactoryService) {
    this.source = new LocalDataSource();

    this.factoryService.getFactories().subscribe((data) => {
      this.source.load(data);
  
    });
  }

  async onConfirmSave(event) {
    const factory: Factory = event.newData;
    factory.id = Math.max(...(await this.source.getAll()).map((x) => x.id)) + 1;
    // Send to API to save record and the resolve
    this.factoryService.createFactory(factory).subscribe((res) => {
      event.confirm.resolve(factory);
    });
  }

  onEditConfirm(event, factory: Factory) {
    // Send to API to edit the record and then resolve
   // event.confirm.resolve(event.newData);
   this.factoryService.updateFactory(factory).subscribe((res) => {
    event.confirm.resolve(factory);
  });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // Send to API to remove and then resolve
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
