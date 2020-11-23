import { Component, OnInit } from '@angular/core';
import { AllServiceService} from './../service/all-service.service'
declare var $: any;

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {
  all = [];
  constructor(private allServiceService : AllServiceService) { 
  }

  ngOnInit(): void {
    this.AllData();
    $(document).ready(function () {
      $('#dtOrderExample').DataTable({
      "order": [[  "desc" ]]
      });
      $('.dataTables_length').addClass('bs-select');
      });

  }


  AllData(){
    this.allServiceService.getAllData().subscribe((alldata)=>{
      console.log('data=', alldata);
      if(alldata.status == 200){
        this.all = [...this.all, ...alldata.data];
        console.log('this.all=', this.all[0].city);
      }else{
        console.log('Data Not Found');
      }
   

    })

  }

  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  categoris: ['Cheeses', 'Beverages']

  sort(property) {
    console.log('property=', property);
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.all.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };






  
}
