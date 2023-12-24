import { Slot } from 'expo-router'
import ThemeProvider from '../style/ThemeProvider'
import AuthProvider from '../auth/AuthProvider'
import '../sheets/sheets'
import { SheetProvider } from 'react-native-actions-sheet'

export default function Layout() {
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