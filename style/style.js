import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"


var window = Dimensions.get('window')

var width = window.width
var height = window.height

const mediumFontSize = 12
const smallFontSize = 10
const titleFontSize = 22

function createStyle(colors) {
  return StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: width*0.76,
        // height: height*0.42,
        maxWidth: 600,
        maxHeight: 500
      },
      button: {
        //backgroundColor: colors.onSecondary,
        paddingVertical: 6,
        paddingHorizontal: 14,
        alignSelf: 'stretch',
        color: colors.onSecondary,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
      },
      center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 0
      },
      textField: {
        borderWidth: 1,
        borderColor: colors.onSecondary,
        borderStyle: 'solid',
        paddingHorizontal: 14,
        paddingVertical: 8,
        alignSelf: 'stretch',
        color: colors.onPrimary,
        backgroundColor: colors.secondary,
        fontSize: mediumFontSize
      },
      vertical: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignSelf: 'stretch',
        padding: 0,
      },
      formLabel: {
        color: colors.onSecondary,
        fontSize: titleFontSize,
        fontWeight: 'bold',
        paddingBottom: 8
      },
      roundedButton: {
        borderRadius: 40,
        backgroundColor: colors.onSecondary
      },
      buttonText: {
        color: colors.onPrimary,
        textAlign: 'center',
        padding: 6,
        fontSize: mediumFontSize
      },
      textButton: {
        padding: 0
      },
      textButtonText: {
        color: colors.primary,
        textAlign: 'center'
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
      },
      backgroundImageContainer: {
        flex: 1,
        flexDirection: 'column',
        width: width,
        height: height
      },
      iconButton: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      postContainer: {
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: `${colors.onPrimary+'77'}`,
        paddingBottom: 24,
        paddingTop: 7
      },
      postFeedContainer: {
        display: 'flex',
        backgroundColor: colors.primary,
        // alignItems: 'flex-start',
        width: width,
        height: height,
        paddingVertical: 8
      },
      postImage: {
        resizeMode: 'cover',
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'purple',
      },
      postImageContainer: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      postInteractionButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'flex-end',
      }
})
}

export {createStyle}