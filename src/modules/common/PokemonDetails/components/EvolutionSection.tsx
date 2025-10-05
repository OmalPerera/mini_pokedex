import {images} from '@/assets/images'
import {colors} from '@/src/ui/theme'
import {setOpacity} from '@/src/utils'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {EvolutionCard} from './EvolutionCard'

interface EvolutionChain {
  name: string
  image: string
  condition: string
}

interface Props {
  title: string
  evolutionChain: EvolutionChain[]
}
export const EvolutionSection = ({title, evolutionChain}: Props) => {
  return (
    <View style={styles.evolutionChainSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {evolutionChain.map((item, index) => (
          <EvolutionCard
            key={index}
            index={index}
            name={item.name}
            image={images.pikachu}
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
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue_900,
    marginBottom: 16,
    marginHorizontal: 16,
  },
})
