import { Text, View } from 'react-native'
import RoundedButton from '../../components/input/buttons/RoundedButton'
import * as ImagePicker from 'expo-image-picker'
import useTheme from '../../style/useTheme'
import Button from '../../components/input/buttons/Button'
import { currentUser, getAllUsers } from '../../network/User'
import { useEffect, useState } from 'react'

export default function Page() {

    async function handleCameraMedia() {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            allowsMultipleSelection: true,
            quality: 1
        })

        console.log({ result })
    }

    async function handleLibraryMedia() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            allowsMultipleSelection: true,
            quality: 1
        })

        console.log({ result })
    }

    const { colors } = useTheme()

    const [users, setUsers] = useState()

    function handleTest() {
        currentUser()
        .then(resp => resp.json())
        .then(resp => console.log({resp}))
    }


    console.log({users})
    // function apiTest() {
    //     fetch('http://192.168.1.84:8080/v1/users')
    //     .then(resp => resp.json())
    //     .then(resp => console.log({resp}))
    //     .catch(err => console.log({err}))
    // }

    return (
        <View style={{ padding: 8, gap: 10, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
            <RoundedButton buttonStyle={{ backgroundColor: colors.secondary }} textStyle={{ color: colors.onSecondary }} title="From library" onClick={handleLibraryMedia} />
            <RoundedButton buttonStyle={{ backgroundColor: colors.secondary }} textStyle={{ color: colors.onSecondary }} title="From camera" onClick={handleCameraMedia} />
            <Button title="api test" onClick={handleTest} />
        </View>
    )
}