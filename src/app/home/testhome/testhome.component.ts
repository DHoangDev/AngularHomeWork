import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
    selector: 'app-testhome',
    templateUrl: 'testhome.component.html'
})

export class TestHomeComponent implements OnInit {

    sendMessage(message: string) {
        this.testHome.sendMessage(message)
    }

    constructor(private testHome: TestserviceService) { }

    ngOnInit() { }

}