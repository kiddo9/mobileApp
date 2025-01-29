import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

interface Detail {
  title: string,
  handles?: () => void,
  extrastyling?: string,
  textstyling?: string,
  disable?: any,
}
//const StyledButton = styled(TouchableOpacity)

function Button ({title, handles, extrastyling, textstyling, disable}: Detail) {
  return (
    <>
    <TouchableOpacity onPress={handles} className={extrastyling} disabled={disable}>
      <Text className={textstyling}>{title}</Text>
    </TouchableOpacity>
    </>
  )
}

export default Button
