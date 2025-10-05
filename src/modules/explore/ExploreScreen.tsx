import {AppHeader, GradientBackground, SearchBox} from '@/src/ui/components'
import React, {useState} from 'react'
import {FlatList, ScrollView, StyleSheet, Text} from 'react-native'
import Animated from 'react-native-reanimated'
import {PopularPokemonSection} from './PopularPokemon/components/PopularPokemonSection'

export function ExploreScreen() {
  const [searchString, setSearchString] = useState('')

  return (
    <GradientBackground>
      <AppHeader />
      <SearchBox style={styles.searchBoxStyles} onSearch={setSearchString} />
      <FlatList
        contentContainerStyle={styles.listViewStyles}
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        ListHeaderComponent={
          <PopularPokemonSection isVisible={!Boolean(searchString)} />
        }
        renderItem={({item}) => <Text>{'searchString'}</Text>}
        //keyExtractor={item => item.id}
      />
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  listViewStyles: {
    padding: 16,
  },
  searchBoxStyles: {
    marginHorizontal: 16,
    marginTop: 28,
    marginBottom: 8,
  },
})
