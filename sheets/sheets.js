import {registerSheet} from 'react-native-actions-sheet'
import CommentsSheet from './CommentsSheet'
import InsightsSheet from './InsightsSheet'

registerSheet('comments-sheet', CommentsSheet)
registerSheet('insights-sheet', InsightsSheet)
console.log('registered sheets')

export {}