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
import {colors} from '@/src/ui/theme'

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
    paddingHorizontal: 20,
    paddingVertical: 28,
    marginHorizontal: 16,
    marginVertical: '12%',
    borderRadius: 16,
    backgroundColor: setOpacity(colors.primary_white)(0.35),
  },
  emptyStateImage: {
    aspectRatio: 1,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue_900,
    textAlign: 'center',
    marginBottom: 16,
  },
  heartIcon: {
    fontSize: 20,
    color: colors.red_550,
  },
  description: {
    fontSize: 16,
    color: colors.grey_700,
    textAlign: 'center',
    marginBottom: 36,
  },
  findPokemonsButton: {
    backgroundColor: colors.blue_900,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  findPokemonsButtonText: {
    color: colors.primary_white,
    fontSize: 18,
    fontWeight: 'bold',
  },
})
