import Link from 'next/link';
import ThemeToggle from "~/components/ui/ThemeSwitcher";

export default function RightBar() {
  return (
    <div className="flex items-center  space-x-6">
      <Link href="/blog">blog</Link>
      <ThemeToggle />
    </div>
  )
}