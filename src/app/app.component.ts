import { Component } from '@angular/core';
import { JsonService } from '../service/service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview';
  customImputList: any;
  constructor(private jsonService: JsonService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.jsonService.getCustomInput().subscribe((data)=> {
      this.customImputList = data;
      console.log(data);
    });

    // this.jsonService.getFormData().subscribe((data)=> {
    //   console.log(data);
    // });

    this.jsonService.patchFormData().subscribe(data => console.log);
  }
}
