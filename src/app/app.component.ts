import { Component } from '@angular/core';
import{categories}from './app.model'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { pipe } from 'rxjs';
//mat select interface
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}
//interface end
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {}
  title = 'vegbox';
  ProductData!:any;
  name:string="";

  ngOnInit(): void {
    this.getAllEmployee();
   this.name= this.ProductData.category_name[1].value;
   console.log(this.name);
  }
//getmethod...........
getEmployee() {
  return this.http.get<any>("http://localhost:3000/post")
  pipe(map((res: any) => {
    return res;
  }))
}
//......................

getAllEmployee() {
  this.getEmployee()
    .subscribe(res => {
      this.ProductData = res;
    })
}

//......................
  //input to selector
  categoriesobj: categories = new categories();

  selectedValue!: string;
  selectedCar!: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

  //..............

  changeClient(data:any){
    alert("selected --->"+data);
  }


}
