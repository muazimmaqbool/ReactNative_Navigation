//! Rename its name back to App.js to make it work
import "react-native-gesture-handler"; //make sure its at the top
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashBoardScreen from "./Components/Screens/2_For Drawer Nav/DashBoardScreen";
import SettingsScreen from "./Components/Screens/2_For Drawer Nav/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "teal",
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
            drawerLabel: "Dashboard Label",
            //using below options here they will be applied only for Dashboard Screen
        //     drawerActiveTintColor: "white",
        //   drawerActiveBackgroundColor: "teal",
        //   drawerContentStyle: {
        //     backgroundColor: "skyblue",
        //   },
          }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
/*
Now Drawer Menu Icon appears on the left side of the app to navigate to different components
 Also its possible to toggle/open the drawer programatically see inside DashboardScreen component
*/
