import { AuthProvider } from './app/providers/AuthProvider';
import { Navigation } from './app/navigation/Navigation';
import { LogBox } from 'react-native';

export default function App() {
    return (
        <AuthProvider>
            <Navigation />
        </AuthProvider>
    );
}

LogBox.ignoreAllLogs();
