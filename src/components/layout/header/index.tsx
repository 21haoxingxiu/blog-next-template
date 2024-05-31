import RightBar from "./RightBar"
import Signature from "./Signature"

export default function Header() {
  return (
    <header className=" flex justify-around items-center">
      <Signature />
      <RightBar />
    </header>
  )
}