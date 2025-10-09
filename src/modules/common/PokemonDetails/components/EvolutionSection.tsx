import {borderRadii, colors, spacing} from '@/src/ui/theme'
import {setOpacity} from '@/src/utils'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {EvolutionCard} from './EvolutionCard'

export interface EvolutionChain {
  name: string
  image: string
  condition: string
}

interface Props {
  title: string
  evolutionChain: EvolutionChain[] | undefined
}
export const EvolutionSection = ({title, evolutionChain}: Props) => {
  return (
    <View style={styles.evolutionChainSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {evolutionChain?.map((item, index) => (
          <EvolutionCard
            key={index}
            index={index}
            name={item.name}
            image={item.image.toString()}
            condition={item.condition}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  evolutionChainSection: {
    alignSelf: 'stretch',
    backgroundColor: setOpacity(colors.primary_white)(0.35),
    borderRadius: borderRadii.r16,
    paddingVertical: spacing.s16,
    marginTop: spacing.s20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue_900,
    marginBottom: spacing.s16,
    marginHorizontal: spacing.s16,
  },
})
