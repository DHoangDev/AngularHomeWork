import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
    selector: 'app-testservice',
    templateUrl: 'testservice.component.html'
})

export class TestServiceComponent implements OnInit {

    message: string = ''

    constructor(private testService: TestserviceService) { }

    ngOnInit() {
        this.testService.recivedMessage().subscribe(data => this.message = data)
    }
}