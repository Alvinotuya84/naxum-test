import { ScreenWidth } from "@rneui/base";
import { StyleSheet } from "react-native";
import {moderateScale,verticalScale,scale} from 'react-native-size-matters'


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
      margin:scale(20)


    }
  })
  export  const homeScreenStyles=StyleSheet.create({
    main:{
     flex:1,
     backgroundColor:"blue"

    }
  })


  export const mainStyles=StyleSheet.create({
    mainButton:{

        borderRadius:5,
        alignItems: 'center',
        backgroundColor: '#90EE90',
        padding: scale(10),
        marginVertical:verticalScale(20)
    },
    mainButtonText:{
        fontWeight:"bold",
        color:"white",
        padding:moderateScale(10),
        marginHorizontal:moderateScale(20)

    }
  })
