import { Text, View } from 'react-native'
import RoundedButton from '../../components/input/buttons/RoundedButton'
import * as ImagePicker from 'expo-image-picker'
import useTheme from '../../style/useTheme'
import Button from '../../components/input/buttons/Button'
import { currentUser, getAllUsers } from '../../network/User'
import { useEffect, useState } from 'react'
import {createPost} from "../../network/Post";

export default function Page() {

    async function handleCameraMedia() {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
            base64: true
        })

        console.log({ result })
    }

    async function handleLibraryMedia() {
        let results = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
            base64: true
        })

        console.log({ results })

        // console.log('results.assets', results.assets)

        const files = results.assets

        
        createPost(
            files,
            "Test post"
        )
            .then(resp => resp.json())
            .then(resp => console.log('got post creation response', resp))
            .catch(err => console.log("error while creating post", err))
    }

    const { colors } = useTheme()

    const [users, setUsers] = useState()

    function handleTest() {
        currentUser()
        .then(resp => resp.json())
        .then(resp => console.log({resp}))
    }


    // console.log({users})
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