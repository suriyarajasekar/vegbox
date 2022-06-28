export class categories{
    category_name: string="";
    category_img:string="";
    total_products:number=0;
    
    
products:product_list[]=[];

constructor(){
    this.products.push(new product_list())

}
}
export class product_list{
    product_name:string="";
    discount:number=0;
    mrp:number=0;
    selling_price:number=0;
    qty:number=0;
    unit:number=0;
    prodict_img:string="";
    

}