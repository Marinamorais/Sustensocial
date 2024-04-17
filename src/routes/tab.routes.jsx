import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Sobrenos from "../screens/Sobrenos";
import Category from "../screens/Category";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sobrenos" component={Sobrenos} />
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
