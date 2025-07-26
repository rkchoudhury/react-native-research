import { createStackNavigator } from '@react-navigation/stack';
import { Browse } from '../screens/browse/Browse';
import { Search } from '../screens/search/Search';
import { NavButton } from '../components/NavButton';

// Define your navigation param list type
type RootStackParamList = {
  [RouteNames.Browse]: undefined;
  [RouteNames.Search]: undefined;
};

const RouteNames = {
  Browse: 'Browse',
  Search: 'Search',
};

const Stack = createStackNavigator();

const BrowseHeaderRight = () => (
  <NavButton label="Search" route={RouteNames.Search} />
);

function TempStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.Browse}
        component={Browse}
        options={{
          headerTitle: 'Browse Movies',
          headerRight: BrowseHeaderRight,
        }}
      />
      <Stack.Screen
        name={RouteNames.Search}
        component={Search}
        options={{
          headerTitle: 'Search Movies',
        }}
      />
    </Stack.Navigator>
  );
}

export {
  TempStack,
  RouteNames as TempRoute,
  type RootStackParamList as TempParamList,
};
