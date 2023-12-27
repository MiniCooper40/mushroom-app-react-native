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
import { router } from 'expo-router'
import { setAuth, useAuth } from "../auth/Auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import useSession from "../auth/useSession";
import SignUpModal from "../components/signup/SignUpModal";
import { createUser } from "../network/User";

export default function Page() {

  const [signingUp, setSigningUp] = useState(true)

  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const { colors, styles } = useTheme()

  const smallFontSize = 10

  const { auth, setAuth } = useSession()

  function handleSignUpAttempt() {
    createUser(username, email, password)
        .then(credentials => {
            console.log('signed up and got credentials: ', credentials)
            setAuth(credentials)
            router.replace("/")
        })
    
  }

  return (
    <ImageBackground source={require('../assets/loginBackground.jpg')}>
      <Center>
        <Container style={{ paddingHorizontal: 35, paddingVertical: 25, backgroundColor: colors.secondary }}>
          <Button onClick={() => console.log({ auth })} title="test auth" />
          <Vertical style={{ gap: 18 }}>
            <FormLabel text="Sign up" />
            <TextField value={email} onTextChange={setEmail} placeholder="Email" style={{ color: colors.primary }} placeholderTextColor={colors.onSecondary} />
            <TextField value={username} onTextChange={setUsername} placeholder="Username" style={{ color: colors.primary }} placeholderTextColor={colors.onSecondary} />
            <TextField value={password} onTextChange={setPassword} placeholder="Password" style={{ color: colors.primary }} placeholderTextColor={colors.onSecondary} />
            <RoundedButton onClick={handleSignUpAttempt} title="Sign up" />
          </Vertical>
        </Container>
      </Center>
    </ImageBackground>
  );
}