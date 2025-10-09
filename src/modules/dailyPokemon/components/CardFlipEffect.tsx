import {borderRadii, colors} from '@/src/ui/theme'
import {FC, JSX, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {CreatureCardBackface} from './CreatureCardBackface'

const FLIP_ANIMATION_DURATION_MS = 800

interface Props {
  children: JSX.Element
  isLoading: boolean
}
export const CardFlipAnimation: FC<Props> = ({children, isLoading}) => {
  const flipValue = useSharedValue(0)

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = `${flipValue.value}deg`
    return {
      transform: [{rotateY}],
      backfaceVisibility: 'hidden',
    }
  })

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = `${flipValue.value + 180}deg`
    return {
      transform: [{rotateY}],
      backfaceVisibility: 'hidden',
      ...StyleSheet.absoluteFillObject,
    }
  })

  useEffect(() => {
    flipValue.value = withTiming(isLoading ? 180 : 0, {
      duration: FLIP_ANIMATION_DURATION_MS,
      easing: Easing.inOut(Easing.ease),
    })
  }, [isLoading, flipValue])

  return (
    <View style={styles.cardContainer}>
      <Animated.View
        style={[styles.card, frontAnimatedStyle]}
        pointerEvents={isLoading ? 'none' : 'auto'}>
        {children}
      </Animated.View>
      <Animated.View
        style={[
          styles.card,
          backAnimatedStyle,
          {backgroundColor: colors.blue_200},
        ]}
        pointerEvents={isLoading ? 'auto' : 'none'}>
        <CreatureCardBackface />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
  },
  card: {
    borderRadius: borderRadii.r16,
    width: '100%',
    height: '90%',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
})
