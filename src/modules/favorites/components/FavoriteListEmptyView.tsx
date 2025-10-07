import {
  useWindowDimensions,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import {setOpacity} from '@/src/utils'
import {images} from '@/assets'
import {borderRadii, colors, spacing} from '@/src/ui/theme'

interface Props {
  onFindPokemonsPress?: () => void
}

export const FavoriteListEmptyView = ({onFindPokemonsPress}: Props) => {
  const {height} = useWindowDimensions()

  return (
    <View style={styles.container}>
      <Image
        source={images.favorite_empty_state}
        style={[styles.emptyStateImage, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <Text style={styles.title}>No favorites yet? Let’s catch some!</Text>
      <Text style={styles.description}>
        Tap the <Text style={styles.heartIcon}>♡</Text> to save your favorites!
      </Text>
      <TouchableOpacity
        style={styles.findPokemonsButton}
        onPress={onFindPokemonsPress}>
        <Text style={styles.findPokemonsButtonText}>Find Pokémons!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.s20,
    paddingVertical: spacing.s28,
    marginHorizontal: spacing.s16,
    marginVertical: '12%',
    borderRadius: borderRadii.r16,
    backgroundColor: setOpacity(colors.primary_white)(0.35),
  },
  emptyStateImage: {
    aspectRatio: 1,
    marginBottom: spacing.s28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue_900,
    textAlign: 'center',
    marginBottom: spacing.s16,
  },
  heartIcon: {
    fontSize: spacing.s20,
    color: colors.red_550,
  },
  description: {
    fontSize: 16,
    color: colors.grey_700,
    textAlign: 'center',
    marginBottom: spacing.s36,
  },
  findPokemonsButton: {
    backgroundColor: colors.blue_900,
    paddingVertical: spacing.s12,
    paddingHorizontal: spacing.s28,
    borderRadius: borderRadii.r32,
  },
  findPokemonsButtonText: {
    color: colors.primary_white,
    fontSize: 18,
    fontWeight: 'bold',
  },
})
