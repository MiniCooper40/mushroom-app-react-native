import SheetHeader from "./SheetHeader";
import ActionSheet, { FlatList, SheetManager } from 'react-native-actions-sheet'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import useTheme from "../style/useTheme";
import ClassificationSuggestion from "../components/insights/ClassificationSuggestion";
import Vertical from "../components/containers/Vertical";
import { Text, View } from "react-native";

export default function InsightsSheet({ payload }) {

    // console.log({payload})

    const { colors, styles } = useTheme()

    const { sheetId, postId, insights } = payload

    function handleExit() {
        SheetManager.hide(sheetId)
    }

    const { suggestions } = insights

    return (

        <ActionSheet gestureEnabled containerStyle={styles.actionSheet} id={sheetId}>
            <SheetHeader
                title="Media insights"
                Icon={() => <AntDesign name="close" size={28} color={colors.onPrimary} />}
                onClickIcon={handleExit}
            />
            <Vertical style={{ gap: 8 }}>
                <FlatList
                    data={suggestions}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        return <ClassificationSuggestion suggestion={item} />
                    }}
                />
            </Vertical>
        </ActionSheet>
    )
}