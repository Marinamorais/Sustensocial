import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Sobrenos from "../screens/Sobrenos";
import Forum from "../screens/Forum";
import Colaboradores from "../screens/Colaboradores";
import Cadastro from "../screens/Cadastro";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sobrenos" component={Sobrenos} />
      <Tab.Screen name="Forum" component={Forum} />
      <Tab.Screen name="Colaboradores" component={Colaboradores} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
