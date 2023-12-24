import { Image } from "expo-image"
import useTheme from "../../style/useTheme"
import { Text, View } from "react-native";
import LabeledText from "../typography/LabeledText";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function ClassificationSuggestion({ suggestion }) {

    const { id=0, name, probability, image } = suggestion

    const { styles, colors } = useTheme()

    const fontStyle = {
        fontSize: 14,
        color: colors.onPrimary
    }

    return (
        <View style={{ flexDirection: 'row', gap: 8, paddingVertical: 2, flex: 1 }}>
            <Image
                source={image}
                style={styles.suggestionImage}
                placeholder={blurhash}
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