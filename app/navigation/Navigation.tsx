import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { Auth } from '../components/screens/auth/Auth';
import { Home } from '../components/screens/home/Home';
import { More } from '../components/screens/more/More';
import { Payments } from '../components/screens/payments/Payments';
import { Services } from '../components/screens/services/Services';
import { Support } from '../components/screens/support/Support';
import { Profile } from '../components/screens/profile/Profile';

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Payments" component={Payments} />
                        <Stack.Screen name="Services" component={Services} />
                        <Stack.Screen name="Support" component={Support} />
                        <Stack.Screen name="Profile" component={Profile} />
                        <Stack.Screen name="More" component={More} />
                    </>
                ) : (
                    <Stack.Screen name="Auth" component={Auth} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
