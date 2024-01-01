import ActionSheet, {SheetManager} from "react-native-actions-sheet";
import PostCreation from "../components/creation/PostCreation";
import useTheme from "../style/useTheme";

export default function PostCreationSheet({payload}) {

    const {colors} = useTheme()

    const {sheetId, onCreatePost} = payload

    // console.log('sheet id is', sheetId)

    function handleCreatePost(post) {
        SheetManager.hide(sheetId).then(() => onCreatePost(post))

    }

    // console.log('in post creation with', {payload})

    return (
        <ActionSheet
            containerStyle={{
                height: "80%",
                backgroundColor: colors.primary
            }}
            gestureEnabled
        >
            <PostCreation onCreatePost={handleCreatePost} />
        </ActionSheet>
    )
}