import { Component,OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  CustomerData: any = [];
  constructor(private customerApi: ApiService) {
    this.customerApi.GetCustomers().subscribe(data => {
      this.CustomerData = data;
      console.log("daya");
    })
  }

  ngOnInit() { }

  title = 'angular-anju';
}
