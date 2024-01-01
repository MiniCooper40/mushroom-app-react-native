import { Text, View } from 'react-native'
import RoundedButton from '../../components/input/buttons/RoundedButton'
import * as ImagePicker from 'expo-image-picker'
import useTheme from '../../style/useTheme'
import {createPost, postFromCameraMedia, postFromLibraryMedia} from "../../network/Post";

export default function Page() {

    const { colors } = useTheme()

    return (
        <View style={{ padding: 8, gap: 10, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
            <RoundedButton buttonStyle={{ backgroundColor: colors.secondary }} textStyle={{ color: colors.onSecondary }} title="From library" onClick={postFromLibraryMedia} />
            <RoundedButton buttonStyle={{ backgroundColor: colors.secondary }} textStyle={{ color: colors.onSecondary }} title="From camera" onClick={postFromCameraMedia} />
        </View>
    )
}