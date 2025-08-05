//! Rename its name back to App.js to make it work, when not working with it set its name to: App_Tab.js
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Components/Screens/3_For Tab Nav/Profile";
import Courses from "./Components/Screens/3_For Tab Nav/Courses";
import Settings from "./Components/Screens/2_For Drawer Nav/SettingsScreen";
import ChatScreen from "./Components/Screens/3_For Tab Nav/chatScreen";
//using icons from expo icons
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // tabBarLabelPosition:"beside-icon",// sets title on the right side of icon (used inside tablets)
          tabBarLabelPosition: "below-icon", //used inside mobile devices (default)
          tabBarShowLabel: true, //true by default , its false then tab label is hidden only icons are shown
          tabBarActiveTintColor: "purple", //color of active tab (on which currently you are) (by default its light blue)
          tabBarInactiveTintColor: "blue", // color of inactive tabs by default its "gray"
        }}
      >
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "My Profile", //changes tab label (otherwise it uses value of name prop here)
            tabBarIcon: (
              { color } //now icon color purple or gray i,e matches the tab color
            ) => <Ionicons name="person" size={30} color={color} />,
            //tabBarBadge:4, //used to show text on top of tab icon, particularly useful for notifications or inbox tab that requires users attention
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarBadge: 5,
            tabBarIcon: ({ color }) => (
              <Ionicons color={color} size={30} name="chatbubbles-outline" />
            ),
            
          }}
        />
        <Tab.Screen
          name="Courses"
          component={Courses}
          options={{
            tabBarLabel: "Course Cart",
            tabBarIcon: ({ color }) => (
              <Ionicons color={color} name="cart" size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons color={color} name="settings-outline" size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
/*
settings is of Drawer Navigation 
*/
