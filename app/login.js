import { useState } from "react";
import Container from "../components/containers/Container";
import Center from "../components/align/Center";
import TextField from "../components/input/text/TextField";
import { Text, View } from 'react-native'
import Button from "../components/input/buttons/Button";
import useTheme from "../style/useTheme";
import Vertical from "../components/containers/Vertical";
import FormLabel from "../components/typography/FormLabel";
import RoundedButton from "../components/input/buttons/RoundedButton";
import TextButton from "../components/input/buttons/TextButton";
import ImageBackground from "../components/containers/ImageBackground";
import { router } from 'expo-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useSession} from "../auth/Auth";

export default function Page() {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const { colors, styles } = useTheme()

  const smallFontSize = 10

  const { auth, setAuth } = useSession()

  function handleLoginAttempt() {
    console.log({username, password})
    signInWithEmailAndPassword(getAuth(), username, password)
      .then(credentials => {
          // console.log('got credentials', credentials)
          setAuth(credentials)
          router.replace("/")
      })
      .catch(err => {
        console.log('error while signing in:', err)
      })
    
  }

  function test() {
    console.log({ auth: getAuth()})
    // firebaseSignOut()
  }

  return (
    <ImageBackground source={require('../assets/loginBackground.jpg')}>
      <Center>
        <Container style={{ paddingHorizontal: 35, paddingVertical: 25, backgroundColor: colors.secondary }}>
          <Button onClick={test} title="test auth" />
          <Vertical style={{ gap: 18 }}>
            <FormLabel text="Login" />
            <TextField value={username} onTextChange={setUsername} placeholder="Username" style={{ color: colors.primary }} placeholderTextColor={colors.onSecondary} />
            <TextField value={password} onTextChange={setPassword} placeholder="Password" style={{ color: colors.primary }} placeholderTextColor={colors.onSecondary} />
            <Vertical style={{ gap: 1, alignItems: 'flex-end' }}>
              <RoundedButton onClick={() => handleLoginAttempt(username, password)} title="Log in" />
              <TextButton text="Forgot password?" textStyle={{ fontSize: smallFontSize }} />
            </Vertical>
            <View style={{ alignSelf: 'stretch', padding: 0 }}>
              <Text style={{ color: colors.onSecondary, textAlign: 'center', fontSize: smallFontSize }}>or</Text>
            </View>
            <RoundedButton title="Continue with Google" />
            <TextButton text="Need an account? Sign up" textStyle={{ fontSize: smallFontSize }} onClick={() => router.replace('signup')} />
          </Vertical>
        </Container>
      </Center>
    </ImageBackground>
  );
}