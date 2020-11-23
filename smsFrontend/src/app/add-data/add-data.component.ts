import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AllServiceService } from './../service/all-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder,
    private AllServiceService: AllServiceService,
    private toaster: ToastrService,
    private router: Router) {

    this.addForm = this.fb.group({

      city: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      price: ['', [Validators.required]],
      status: ['', [Validators.required]],
      color: ['', [Validators.required]]
    })

  }



  ngOnInit(): void {
  }

  saveData() {
    this.AllServiceService.addData(this.addForm.value).subscribe((result) => {
      if (result.status == 200) {
        this.toaster.success(result.msg);
        this.addForm.reset();
      } else {
        this.toaster.error('error', result.msg);
      }
    })

  }

}
