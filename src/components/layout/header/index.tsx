import Link from "next/link"
import RightBar from "./RightBar"
import Signature from "./Signature"

export default function Header() {
  return (
    <header className=" flex justify-between items-center">
      <Link href="/">
        <Signature />
      </Link>
      <RightBar />
    </header>
  )
}