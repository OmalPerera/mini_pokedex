import {Ionicons} from '@expo/vector-icons'
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native'
import Animated, {ZoomIn} from 'react-native-reanimated'
import {colors} from '../theme'
import {FC} from 'react'

interface Props {
  isFavorite?: boolean
  onPressFavorite?: () => void
  size?: number
  style?: StyleProp<ViewStyle>
}

export const AnimatedFavoriteIcon: FC<Props> = ({
  isFavorite,
  onPressFavorite,
  size = 30,
  style,
}) => {
  return (
    <Animated.View entering={isFavorite ? ZoomIn : undefined} style={style}>
      <TouchableOpacity hitSlop={24} onPress={onPressFavorite}>
        {isFavorite ? (
          <Ionicons name="heart" size={size} color={colors.red_550} />
        ) : (
          <Ionicons name="heart-outline" size={size} color={colors.grey_950} />
        )}
      </TouchableOpacity>
    </Animated.View>
  )
}
