import {Text} from 'react-native'
import useTheme from '../../style/useTheme'

const FormLabel = ({style, text}) => {

    const {styles} = useTheme()

    return (
        <Text style={[style, styles.formLabel]}>{text}</Text>
    )
}

export default FormLabel