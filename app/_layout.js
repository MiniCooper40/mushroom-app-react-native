import { Slot } from 'expo-router'
import ThemeProvider from '../style/ThemeProvider'
import SessionProvider from '../auth/SessionProvider'
import '../sheets/sheets'
import { SheetProvider } from 'react-native-actions-sheet'

export default function Layout() {

    return (
        <SessionProvider>
            <ThemeProvider>
                <SheetProvider>
                    <Slot />
                </SheetProvider>
            </ThemeProvider>
        </SessionProvider>

    )
}