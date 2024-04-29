import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Sobrenos from "../screens/Sobrenos";
import Forum from "../screens/Forum";
import Colaboradores from "../screens/Colaboradores";
import Cadastro from "../screens/Cadastro";
import Category from "../screens/Categoria";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categoria" component={Category} />
      <Stack.Screen name="Sobrenos" component={Sobrenos} />
      <Stack.Screen name="Forum" component={Forum} />
      <Stack.Screen name="Colaboradores" component={Colaboradores} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
