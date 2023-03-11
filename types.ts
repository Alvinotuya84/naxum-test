export interface Screen{
    name:string;
    component:({ navigation ,route}: { navigation?: any,route?:any; }) => JSX.Element,
    title:string;
}

export interface LoginInputs{
password?:string;
email?:string;
}