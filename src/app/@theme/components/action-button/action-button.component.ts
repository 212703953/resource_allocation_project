import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-action-button',
    template: `<button (click)="onClick()" nbButton>Add</button>`,
    styles: [``]
})

export class ActionButtonComponent implements OnInit {

    @Input() value: string | number;
    @Input() rowData: any;

    @Output() goToPage: EventEmitter<any> = new EventEmitter();

    onClick() {
        this.goToPage.emit(this.value);
    }

    ngOnInit() { }
}