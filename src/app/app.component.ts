import { Component } from '@angular/core';
import { JsonService } from '../service/service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customInputList: any;
  person:any;
  updatePerson={};

  constructor(private jsonService: JsonService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.jsonService.getCustomInput().subscribe((customInputList)=> {
      this.customInputList = customInputList;
    });

    this.jsonService.getFormData().subscribe((person:any)=> {
      this.person = person.person[0];
    });

  }

  Save() {
    this.jsonService.patchFormData(this.updatePerson).subscribe(data => console.log("Saved succes"));
  }

  valChange($event: {value: string, fieldId: string}) {

    // @ts-ignore
    this.updatePerson[$event.fieldId] = $event.value;
  }
}
