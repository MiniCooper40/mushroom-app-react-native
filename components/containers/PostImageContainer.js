import { View } from "react-native";

export default function PostImageContainer({children}) {

    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            {children}
        </View>
    )
}