export interface newUserRequest {
    _id:string,
    name:string;
    email:string;
    photo:string;
    gender:"male"|"female"|"non-binary";
    dob:string;
}

export interface newProductRequest {
    name:string;
    price:number;
    stock:number;
    catagory:string;
}