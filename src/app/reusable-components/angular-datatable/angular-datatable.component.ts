import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Router, NavigationExtras} from '@angular/router'

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-angular-datatable',
  templateUrl: './angular-datatable.component.html',
  styleUrls: ['./angular-datatable.component.css']
})
export class AngularDatatableComponent implements OnInit {
  @Input() dataresult : string;

  dtOptions: DataTables.Settings = {};
  persons: Person[];
  displayParameter;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http.post<DataTablesResponse>('https://angular-datatables-demo-server.herokuapp.com/', dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = this.dataresult['data'];

            callback({
              recordsTotal: this.dataresult['data'].length,
              recordsFiltered: this.dataresult['data'].length,
              data: []
            });
          });
      },
      columns: [{ data: '' }, { data: 'id' }, { data: 'full_name' }, { data: 'phone_number' }, { data: 'down_line_count' }, { data: 'joing_date' }, { data: '' }]
    };
  }

//   handleChange(evt){ 
//     this.displayParameter = evt;
// console.log(evt);
// }

// ajax: (dataTablesParameters: any, callback) => {
//   that.http.post<DataTablesResponse>('https://angular-datatables-demo-server.herokuapp.com/', dataTablesParameters, {}
//     ).subscribe(resp => {
//       that.persons = this.dataresult['data'];

//       callback({
//         recordsTotal: this.dataresult['data'].length,
//         recordsFiltered: this.dataresult['data'].length,
//         data: []
//       });
//     });
// },

handleChange(evt) {
  var target = evt.target;
  if (target.checked) {
    console.log('if------------ Active', evt);
    // this._prevSelected = target;
  } else {
    console.log('else------------ Inactive', evt);
  }
}

// onClickView(person){
//   let navigationExtras: NavigationExtras = {
//     queryParams: {
//         "member_id": JSON.stringify(person.id),
//     }
//   };
//   this.router.navigate(['/add-edit-details'], navigationExtras);
// }

onClickView(person){
  this.router.navigate(['/personal-details'], { queryParams: { val: person.id }});
}

onClickAddEdit(person){
  this.router.navigate(['/add-edit-details'], { queryParams: { val: person.id }});
}
}