import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MainServicesService } from '../services/main-services.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  public employeeList: any[] = [];
  public loading: boolean = true;

  constructor(public router: Router, private MainServicesService: MainServicesService) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.MainServicesService.getEmployeeDetails().subscribe(data => {
      this.employeeList = data;
      this.loading = false;
    },
      error => {
        console.log(error);
      });
  }

  viewEmployeeDetails(userId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        userId: userId,
      }
    };
    this.router.navigate(['/tasks', userId], navigationExtras);
  }

}
