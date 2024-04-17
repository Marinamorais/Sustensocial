import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Sobrenos from "../screens/Sobrenos";
import Category from "../screens/Category";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sobrenos" component={Sobrenos} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
