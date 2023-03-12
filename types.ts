import { Icon } from "react-native-vector-icons/Icon";

export interface Screen{
    name:string;
    component:({ navigation ,route}: { navigation?: any,route?:any; }) => JSX.Element,
    title:string;
}

export interface LoginInputs{
password?:string;
email?:string;
}

export interface ContactItemType{
    id:number,
    name:string;
    contact:string;
}

export interface HomeNavItem{
    icon:Icon;
    iconName:string;
    callBack:(dispatch:any,setAddEditContact:(value: React.SetStateAction<boolean>) => void,AddEditContact:boolean)=>void;
    id:number;
}