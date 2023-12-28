
import Ionicons from '@expo/vector-icons/build/Ionicons'
import useTheme from '../../style/useTheme'
import { Tabs, Redirect, router } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import AntDesign from '@expo/vector-icons/build/AntDesign'
import Feather from '@expo/vector-icons/build/Feather'
import { Text, View, Image } from 'react-native'
import IconButton from '../../components/input/buttons/IconButton'
import logo from '../../assets/logo1.png'
import HeaderButtons from '../../components/input/buttons/HeaderButtons'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useAuth } from '../../auth/Auth'
import useSession from '../../auth/useSession'
import {firebase} from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {auth as firebaseAuth} from '../../firebaseConfig'

function isValidAuth() {
    return true
}


export default function Layout() {

    const { auth, setAuth, account } = useSession()
    const { colors } = useTheme()

    useEffect(() => {
        return getAuth().onAuthStateChanged(credentials => {
            // console.log({credentials})
            if(credentials) {
                setAuth(credentials)
                router.replace("/")
            }
            else {
                setAuth(undefined)
                console.log('user not logged in')
            }
        })
    }, [])

    // console.log({account})
    // console.log({auth})

    if (auth === undefined) return <Redirect href="login" />

    const tabBarItemStyle = {
        tabBarLabelStyle: {
            color: colors.onSecondary
        },
        tabBarIconStyle: {
            color: colors.onSecondary
        }
    }

    return (
        <>
            <Tabs
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.secondary,
                    },
                    headerTitleStyle: {
                        color: colors.onSecondary
                    },
                    tabBarStyle: {
                        backgroundColor: colors.secondary,
                    },
                    title: "Mycelium",
                    headerRight: () => {
                        return <HeaderButtons
                            openSettings={undefined}
                            openNotifications={undefined}
                            settingsIcon={() => <Ionicons name="settings-outline" size={24} color={colors.onSecondary} />}
                            notificationsIcon={() => <AntDesign name="notification" size={24} color={colors.onSecondary} />}
                        />
                    },
                    headerTitle: () => {
                        return <Image source={logo} style={{ width: 140, resizeMode: 'contain' }} />
                    }
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarLabel: "Home",
                        ...tabBarItemStyle,
                        tabBarIcon: ({ focused, size }) => {
                            let opacity = focused ? 0.5 : 1
                            return <Ionicons style={{ opacity: opacity }} name="home-outline" size={size} color={colors.onSecondary} />
                        }
                    }}
                />
                <Tabs.Screen
                    name="explore"
                    options={{
                        tabBarLabel: "Explore",
                        ...tabBarItemStyle,
                        tabBarIcon: ({ focused, size }) => {
                            let opacity = focused ? 0.5 : 1
                            return <AntDesign style={{ opacity: opacity }} name="search1" size={size} color={colors.onSecondary} />
                        }
                    }}
                />
                <Tabs.Screen
                    name="capture"
                    options={{
                        tabBarLabel: "Capture",
                        ...tabBarItemStyle,
                        tabBarIcon: ({ focused, size }) => {
                            let opacity = focused ? 0.5 : 1
                            return <Ionicons style={{ opacity: opacity }} name="camera-outline" size={size} color={colors.onSecondary} />
                        }
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarLabel: "Profile",
                        ...tabBarItemStyle,
                        tabBarIcon: ({ focused, size }) => {
                            let opacity = focused ? 0.5 : 1
                            return <Ionicons style={{ opacity: opacity }} name="person-outline" size={size} color={colors.onSecondary} />
                        }
                    }}
                />
                <Tabs.Screen
                    name="account/[account]"
                    options={{
                        href: null
                    }}
                />
                <Tabs.Screen
                    name="post/[post]"
                    options={{
                        href: null
                    }}
                />
            </Tabs >
        </>
    )
}