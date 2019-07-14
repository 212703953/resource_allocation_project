import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-action-button',
    template: `<button (click)="onClick()" nbButton>Edit</button>`,
    styles: [``]
})

export class ActionButtonComponent implements OnInit {

    @Input() value: string | number;
    @Input() rowData: any;

    @Output() goToCapabilities: EventEmitter<any> = new EventEmitter();

    onClick() {
        this.goToCapabilities.emit(this.value);
    }

    ngOnInit() { }
}