import { Image } from "expo-image"
import useTheme from "../../style/useTheme"
import { Text, View } from "react-native";
import LabeledText from "../typography/LabeledText";
import {BLUR_HASH} from "../../style/style";

export default function ClassificationSuggestion({ suggestion }) {

    const { id=0, name, probability, image } = suggestion

    const { styles, colors } = useTheme()

    return (
        <View style={[styles.mediumGap, styles.horizontalFlex, {paddingVertical: 2, flex: 1 }]}>
            <Image
                source={image}
                style={styles.suggestionImage}
                placeholder={BLUR_HASH}
                contentFit="cover"
                transition={1000}
            />
            <View style={{width: '100%'}}>
                <LabeledText
                    label="Match:"
                    text={name}
                />
                <LabeledText
                    label="Probability:"
                    text={probability}
                />
            </View>
        </View>
    )

}