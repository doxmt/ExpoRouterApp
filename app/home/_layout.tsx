import {Text} from "react-native";
import { Slot , Link} from "expo-router";

function Header () {
  return (
    <>
      <Link href="/home">Home </Link>
      <Link href="/home/about">About </Link>
    </>
  )
}
export default function HomeScreenLayout () {
  return (
    <>
    <Header />
    <Slot />
    </>
  )
}