//! Rename its name back to App.js to make it work and when not working with this set its name to : App_Drawer.js
import "react-native-gesture-handler"; //make sure its at the top
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashBoardScreen from "./Components/Screens/2_For Drawer Nav/DashBoardScreen";
import SettingsScreen from "./Components/Screens/2_For Drawer Nav/SettingsScreen";
import Contact from "./Components/Screens/2_For Drawer Nav/Contact"

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "white", //color of text which is active
          drawerActiveBackgroundColor: "teal", //background color of text which is active
          drawerContentStyle: {
            backgroundColor: "skyblue",
          },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashBoardScreen}
          options={{
            title: "My Dashboard",
            drawerLabel: "Dashboard Label", //displayed on the drawer which comes from the side of the screen
            //using below options here they will be applied only for Dashboard Screen
            //     drawerActiveTintColor: "white",
            //   drawerActiveBackgroundColor: "teal",
            //   drawerContentStyle: {
            //     backgroundColor: "skyblue",
            //   },
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title:"My Settings", //here drawerLabel text is not mentioned so it will take the value title for drawerLabel as well
          }}
        />
        <Drawer.Screen
        name="Contact"
        component={Contact}
        //here i have not mentioned title and drawerLabel so it will take the value of name  for both
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
/*
Now Drawer Menu Icon appears on the left side of the app to navigate to different components
 Also its possible to toggle/open the drawer programatically see inside DashboardScreen component
*/
