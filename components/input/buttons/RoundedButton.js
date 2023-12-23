import useTheme from "../../../style/useTheme"
import Button from "./Button"


const RoundedButton = ({title, onClick, style}) => {

    const {styles} = useTheme()

    return (
        <Button title={title} onClick={onClick} buttonStyle={[styles.roundedButton, style]}/>
    )
}

export default RoundedButton