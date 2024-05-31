import ThemeToggle from "~/components/ui/ThemeSwitcher";

export default function RightBar() {
  return (
    <div className="flex items-center  space-x-6">
      <span>blog</span>
      <span>project</span>
      <ThemeToggle />
    </div>
  )
}