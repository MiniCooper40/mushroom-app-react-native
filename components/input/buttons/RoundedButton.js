import useTheme from "../../../style/useTheme"
import Button from "./Button"


const RoundedButton = ({title, onClick, buttonStyle, textStyle, disabled=false}) => {

    const {styles} = useTheme()

    const opacity = disabled ? 0.5 : 1

    return (
        <Button disabled={disabled} title={title} onClick={onClick} textStyle={textStyle} buttonStyle={[styles.roundedButton, buttonStyle, {opacity}]}/>
    )
}

export default RoundedButton