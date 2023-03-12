import { ScreenWidth } from "@rneui/base";
import { StyleSheet } from "react-native";
import {moderateScale,verticalScale,scale} from 'react-native-size-matters'
import { Colors } from "./constants";


  export const loginScreenStyles=StyleSheet.create({
    main:{
      justifyContent:"center",
      alignItems:"center",
      flex:1
    },
   input: {
    width: "80%", alignSelf: "center",
    },
    submitButton:{
      width:"80%"
    },
    inputContainer:{
paddingHorizontal:scale(5)
    }
  })

  export const profileScreenStyles=StyleSheet.create({
    main:{
      justifyContent:"center",
      alignItems:"center",
      flex:1,

    },
    wrapper:{
      alignItems:"center",
      flex:1,
      width: ScreenWidth * 0.8
       }

  })
 export  const contactItemStyles=StyleSheet.create({
    wrapper:{
      flexDirection:"row",
      width:"100%",
      height:scale(50),
      margin:scale(20),
      borderBottomWidth:1,
      borderBottomColor:Colors.mainGrey,
      justifyContent:"flex-start",


    }
  })
  export  const homeScreenStyles=StyleSheet.create({
    main:{
     flex:1,

    },
    header:{
      textAlign:'center',
      color:Colors.mainTheme,
      margin:scale(50),
      fontSize:scale(20)
    },
    footerButton:{
      backgroundColor:Colors.mainTheme,
      flexDirection:"row",
      width:"100%",
      bottom:0,
      alignItems:"flex-start",
      padding:scale(10)
    },
    placeholder:{
      flexDirection:"row",
      margin:scale(20)
    },
    emptyList:{
      alignSelf:"center"
    }
  })

  export const homeNavStyle=StyleSheet.create({
    wrapper:{
      height:scale(70),
      width:scale(70),
      borderRadius:scale(70/2),
      backgroundColor:Colors.mainTheme,
      justifyContent:"center",
      alignItems:"center",
      margin:10
    },
    searchBarContainer:{
      backgroundColor: Colors.mainTheme,
      width: "80%",
      alignSelf: "center",
      borderRadius: scale(10),
    },
    searchInput:{
      backgroundColor: "white", borderColor: "white"
    },
    main:{
      alignItems:"center",
      alignSelf:"center",
    }

  })


  export const mainStyles=StyleSheet.create({
    mainButton:{

width:"80%",
alignSelf:"center",
marginTop:scale(10),
borderRadius:scale(10)
    },
    mainButtonText:{
        fontWeight:"bold",
        color:"white",
        padding:moderateScale(10),
        marginHorizontal:moderateScale(20)

    }
  })
