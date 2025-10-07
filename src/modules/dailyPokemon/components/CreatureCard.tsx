import {colors} from '@/src/ui/theme'
import {setOpacity} from '@/src/utils'
import {FC, memo} from 'react'
import {StyleSheet, View} from 'react-native'
import {CardActionButton} from './CardActionButtons'
import {CardHeaderSection} from './CardHeaderSection'
import {CreatureBasicInfo} from './CreatureBasicInfo'
import {CardFlipAnimation} from './CardFlipEffect'

interface Props {
  name?: string
  isFavorite?: boolean
  image?: string
  type?: string
  onPressLearnMore?: () => void
  onPressFavorite?: () => void
  onPressAnotherOne?: () => void
  isLoading: boolean
}
export const CreatureCard: FC<Props> = memo(
  ({
    name = '',
    image,
    isFavorite,
    type,
    onPressFavorite,
    onPressLearnMore,
    onPressAnotherOne,
    isLoading,
  }) => {
    return (
      <CardFlipAnimation isLoading={isLoading}>
        <View
          style={[
            styles.card,
            {backgroundColor: setOpacity(colors.primary_white)(0.35)},
          ]}>
          <CardHeaderSection
            headerTitle="Daily Pokémon"
            isFavorite={isFavorite}
            onPressFavorite={onPressFavorite}
          />
          <CreatureBasicInfo
            pokemonImage={image}
            name={name}
            type={type}
            onPress={onPressLearnMore}
          />
          <CardActionButton
            title="Learn More"
            onPress={onPressLearnMore}
            backgroundColor={colors.blue_200}
          />
          <CardActionButton
            title="Another One!"
            onPress={onPressAnotherOne}
            backgroundColor={colors.green_200}
          />
        </View>
      </CardFlipAnimation>
    )
  },
)

CreatureCard.displayName = 'CreatureCard'

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: colors.primary_black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
})
