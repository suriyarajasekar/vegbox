import { Component } from '@angular/core';
import{categories}from './app.model'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { pipe } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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
  cate :categories=new categories();
  ProductData1!:any;
  name:string="";

  ngOnInit(): void {
    this.getAllEmployee();
   this.name= this.ProductData.category_name[1].value;
   console.log(this.name);
   console.log(this.selectedValue)
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
 
this.ProductData1  = this.getEmployee()
    .subscribe(res => {
      this.ProductData = res;
    })
    console.log(this.ProductData1.category_name)
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
    console.log(data)
    alert("selected --->"+data);
    console.log(this.selectedValue)
  }


}
