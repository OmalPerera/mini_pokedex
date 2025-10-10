import React, {useEffect} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {RootStackScreenProps} from '../../../navigation/types'
import {images} from '@/assets/images'
import {colors} from '@/src/ui/theme'
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  withDelay,
  cancelAnimation,
} from 'react-native-reanimated'
import {scheduleOnRN} from 'react-native-worklets'

const WINK_DELAY_DURATION_MS = 1250
const NAVIGATION_DELAY_MS = 1000

export const LaunchScreen = ({
  navigation,
}: RootStackScreenProps<'LaunchScreen'>) => {
  const winkOpacity = useSharedValue(1)

  const navigateToTabNavigator = () => {
    navigation.replace('TabNavigator')
  }

  useEffect(() => {
    winkOpacity.value = withDelay(
      WINK_DELAY_DURATION_MS,
      withTiming(0, {duration: 500}, (isFinished?: boolean) => {
        if (isFinished) {
          setTimeout(() => {
            scheduleOnRN(navigateToTabNavigator)
          }, NAVIGATION_DELAY_MS)
        }
      }),
    )

    // As the fallback
    const timeout = setTimeout(
      () => {
        navigateToTabNavigator()
      },
      (NAVIGATION_DELAY_MS + WINK_DELAY_DURATION_MS) * 2,
    )

    return () => {
      clearTimeout(timeout)
      cancelAnimation(winkOpacity)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const winkContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: winkOpacity.value,
    }
  })

  return (
    <View style={styles.container}>
      <Image source={images.splash_unwink} style={styles.imgStyles} />
      <Animated.View style={[styles.winkContainer, winkContainerAnimatedStyle]}>
        <Image source={images.splash_wink} style={styles.imgStyles} />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue_50,
  },
  imgStyles: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  winkContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
