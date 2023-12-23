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
import ThemeProvider from "../style/ThemeProvider";
import useAuth from "../auth/useAuth";
import {router} from 'expo-router'

export default function Page() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { colors, styles } = useTheme()
  const { auth, setAuth } = useAuth()

  const smallFontSize = 10

  function toggleAuth() {
    setAuth(true)
    router.replace("/")
  }

  return (
    <ImageBackground source={require('../assets/loginBackground.jpg')}>
      <Center>
        <Container style={{ paddingHorizontal: 35, paddingVertical: 25, backgroundColor: colors.secondary }}>
          <Vertical style={{ gap: 18 }}>
            <FormLabel text="Login" />
            <TextField value={username} onTextChange={setUsername} placeholder="Username" style={{ color: colors.primary }} placeholderTextColor={colors.onSecondary} />
            <TextField value={password} onTextChange={setPassword} placeholder="Password" style={{ color: colors.primary }} placeholderTextColor={colors.onSecondary} />
            <Vertical style={{ gap: 1, alignItems: 'flex-end' }}>
              <RoundedButton onClick={toggleAuth} title="Log in" />
              <TextButton text="Forgot password?" textStyle={{ fontSize: smallFontSize }} />
            </Vertical>
            <View style={{ alignSelf: 'stretch', padding: 0 }}>
              <Text style={{ color: colors.onSecondary, textAlign: 'center', fontSize: smallFontSize }}>or</Text>
            </View>
            <RoundedButton title="Continue with Google" />
            <TextButton text="Need an account? Sign up" textStyle={{ fontSize: smallFontSize }} />
          </Vertical>
        </Container>
      </Center>
    </ImageBackground>
  );
}