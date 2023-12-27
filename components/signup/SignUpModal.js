import Modal from 'react-native-modal'
import useTheme from '../../style/useTheme'
import { Text, View } from 'react-native'

export default function SignUpModal({ isVisible, onExit = () => { } }) {

    const { styles } = useTheme()

    const outer = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.signInModal}>
                <Text>Sign in</Text>
            </View>
        </Modal>
    )
}