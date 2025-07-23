import { Spinner, Text, VStack } from "@chakra-ui/react"

export const SpinnerLogout = () => {
  return (
    <VStack colorPalette="teal">
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600">Cerrando sesión...</Text>
    </VStack>
  )
}
