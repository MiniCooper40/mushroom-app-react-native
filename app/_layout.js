import { Stack, Slot } from 'expo-router'
import ThemeProvider from '../style/ThemeProvider'
import ImageBackground from '../components/containers/ImageBackground'
import AuthProvider from '../auth/AuthProvider'

export default function Layout() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <Slot />
            </ThemeProvider>
        </AuthProvider>
    )
}