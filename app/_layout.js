import { Slot } from 'expo-router'
import ThemeProvider from '../style/ThemeProvider'
import AuthProvider from '../auth/AuthProvider'
import '../sheets/sheets'
import { SheetProvider } from 'react-native-actions-sheet'
import { useAuth } from '../auth/Auth'

export default function Layout() {

    // const [auth, setAuth] = useAuth()

    return (
        <AuthProvider>
            <ThemeProvider>
                <SheetProvider>
                    <Slot />
                </SheetProvider>
            </ThemeProvider>
        </AuthProvider>

    )
}