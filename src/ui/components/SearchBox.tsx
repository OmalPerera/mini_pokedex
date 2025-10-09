import React, {useCallback, useEffect, useState} from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native'
import {borderRadii, colors, spacing} from '../../ui/theme'
import {Ionicons} from '@expo/vector-icons'

interface SearchBoxProps {
  style?: StyleProp<ViewStyle>
  placeholder?: string
  onSearch?: (searchString: string) => void
  debounceDelay?: number
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  style,
  placeholder = 'Search Pokémon...',
  onSearch,
  debounceDelay = 500,
}) => {
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      if (onSearch) {
        onSearch(searchString)
      }
    }, debounceDelay)

    return () => {
      clearTimeout(handler)
    }
  }, [searchString, debounceDelay, onSearch])

  const handleSearch = useCallback(() => {
    if (onSearch) {
      onSearch(searchString)
    }
  }, [onSearch, searchString])

  return (
    <View style={[styles.container, style]}>
      <Ionicons name="search" size={26} color={colors.grey_700} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.grey_700}
        value={searchString}
        onChangeText={setSearchString}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        maxLength={40}
        numberOfLines={1}
      />
      {searchString.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            setSearchString('')
          }}
          hitSlop={24}>
          <Ionicons
            name="close-circle-sharp"
            size={24}
            color={colors.grey_700}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary_white,
    borderRadius: borderRadii.r16,
    paddingHorizontal: spacing.s16,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: spacing.s8,
    fontSize: 16,
    color: colors.blue_900,
  },
})
