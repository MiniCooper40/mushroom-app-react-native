import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"


export const BLUR_HASH =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';



var window = Dimensions.get('window')

var width = window.width
var height = window.height

const mediumFontSize = 12
const smallFontSize = 10
const titleFontSize = 22

const mediumGap = 8

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
      postContentContainer: {
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
      },
      postInfoSubtext: {
        fontSize: 12,
        color: colors.onPrimary,
        opacity: 0.5
      },
      postHeaderContainer: { 
        padding: 10, 
        gap: mediumGap 
      },
      postCaption: {

      },
      postInfoContainer: {
        gap: mediumGap,
        flexDirection: 'row'
      },
      actionSheet: {
        paddingBottom: 0,
        marginBottom: 0,
        backgroundColor: colors.primary,
        padding: 10,
        height: '60%'
      },
      suggestionImage: {
        width: 100,
        height: 100
      },
      exploreImage: {
        resizeMode: 'contain',
        flex: 1,
        height: 240,
        maxHeight: 300
      },
      signInModal: {
        width: width*0.76,
        maxWidth: 600,
        maxHeight: 500,
        backgroundColor: colors.secondary
      },
      commentInteractionText : {
        color: colors.onPrimary,
        opacity: 0.5,
        textDecorationLine: 'underline',
        textAlign: 'left',
        fontSize: 12
      },
      commentTextStyle: {
        color: colors.onPrimary,
        fontSize: 16
      },
      commentSection: {
        borderTopColor: colors.onPrimary + '77',
        borderTopWidth: 1,
        borderBottomColor: colors.onPrimary + '77',
        borderBottomWidth: 1,
        paddingTop: 10
      },
      mediumGap: {
        gap: mediumGap
      },
      horizontalFlex: {
        flexDirection: 'row'
      },
      smallGap: {
        gap: 4
      },
      postInteractionIconStyle: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3
      }
})
}

export {createStyle}