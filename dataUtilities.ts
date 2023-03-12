import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import BalanceScreen from "./screens/BalanceScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RecoverySeedScreen from "./screens/RecoveryScreen";
import { HomeNavItem, Screen } from "./types";
import {toggleAddEditContactOverLay} from './redux/ContactsSlice'
export const screens:Screen[]=[



    {
        name:"ProfileScreen",
        component:ProfileScreen,
        title:"Profile",
    },
    {
        name:"HomeScreen",
        component:HomeScreen,
        title:"Home",
    },




];

export const homeNavItems: HomeNavItem[]= [
    {
        icon:MaterialCommunityIcons,
        iconName:"plus-box-multiple-outline",
        callBack:(dispatch,setAddEditContact,AddEditContact)=>{
            setAddEditContact(!AddEditContact)
        },
        id:1
    },
    {
        icon:FontAwesome5,
        iconName:"users",
        callBack:(dispatch,setAddEditContact)=>{

        },
        id:2

    },
    {
        icon:FontAwesome,
        iconName:"envelope-o",
        callBack:(dispatch)=>{

        },
        id:3

    }
];

