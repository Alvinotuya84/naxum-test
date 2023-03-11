import BalanceScreen from "./screens/BalanceScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RecoverySeedScreen from "./screens/RecoveryScreen";
import { Screen } from "./types";

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

