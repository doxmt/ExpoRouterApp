import { Stack, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, Image, StyleSheet } from "react-native";

function LogoTitle() {
  return(
    <Image
      style={styles.image}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png'
      }}
    />
  )
}

export default function StackScreen () {
  const [count, setCount] = useState(0);
  // const navigation = useNavigation();
  
  // useEffect(()=>{
  //   navigation.setOptions({
  //     headerShown: false
  //   })
  // },[navigation])

  return(
    <>
      <Stack.Screen
        options={{
          headerTitle: () => <LogoTitle />,
          headerRight: () => <Button
            onPress={() => setCount(c => c+1)}
            title="Update count" />
        }}
      />
      <Text>Count: {count}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,

  },

})