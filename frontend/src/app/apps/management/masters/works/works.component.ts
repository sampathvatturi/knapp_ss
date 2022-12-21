import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  permissions = { "slct_in": 1, "insrt_in": 1, "updt_in": 1, "dlte_in": 1, "exprt_in": 1 };
  rowData: any = [];
  worksForm!: FormGroup;
  showForm: boolean = false;

  constructor( private fb: FormBuilder) { }
  columnDefs = [
    { headerName: 'Sl.No.', field: 'sno', alignment: 'center', filter: false },
    { headerName: 'Works Name', alignment: 'left', field: 'work_name' },
  ]
  ngOnInit(): void {
  }
  onToolbarPreparing(e:any) {
    e.toolbarOptions.items.unshift({
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'plus',
        text: 'Add Proposal',
        onClick: this.openSideBar.bind(this, 'new'),
        bindingOptions: {
          'disabled': 'isEmailButtonDisabled'
        }
      }
    });
  }
  openSideBar() {
    this.showForm = true;
    this.addform();
  }
  openSideBarEdit(role:any,data:any){
      this.showForm = true;
      this.editform(data);
  }
  
  editform(data:any){
    this.worksForm = this.fb.group({
      work_name: [data.work_name, [Validators.required]],
    });
  }
  addform(){
    this.worksForm = this.fb.group({
      work_name: ['', [Validators.required]],
    });
  }

}
