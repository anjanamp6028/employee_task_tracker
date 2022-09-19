import { Component, OnInit } from '@angular/core';
import { MainServicesService } from '../services/main-services.service';
import { ActivatedRoute } from '@angular/router';
declare var $;

@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.scss']
})
export class EmployeeTasksComponent implements OnInit {

  constructor(public router: ActivatedRoute, private MainServicesService: MainServicesService) { }

  public userId: string;
  public employeeTask: any[] = [];
  public loading = true;
  public task: any;

  ngOnInit() {
    const subscription = this.router.queryParams.subscribe(res => {
      this.userId = res.userId;
      this.getEmployeeTask(this.userId);
    });

  }

  getEmployeeTask(userId) {
    this.MainServicesService.getEmployeeTask(userId).subscribe(data => {
      this.employeeTask = data;
      this.loading = false;
      this.employeeTask.forEach(task => {
        task.completed = task.completed == true ? 'Completed' : 'Not Completed'
      });
    },
      error => {
        console.log(error);
      });
  }
  createTask() {
    this.task = '';
    $("#addTask").modal("show");
  }


  addTask() {
    var data = {
      "userId": this.userId,
      "id": this.userId,
      "title": this.task,
      "completed": 'Not Completed'
    };
    this.employeeTask.push(data);
    $("#addTask").modal("hide");
  }

}
