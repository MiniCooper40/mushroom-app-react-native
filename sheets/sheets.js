import {registerSheet} from 'react-native-actions-sheet'
import CommentsSheet from './CommentsSheet'
import InsightsSheet from './InsightsSheet'
import PostCreationSheet from "./PostCreationSheet";

registerSheet('comments-sheet', CommentsSheet)
registerSheet('insights-sheet', InsightsSheet)
registerSheet('create-post-sheet', PostCreationSheet)
console.log('registered sheets')

export {}