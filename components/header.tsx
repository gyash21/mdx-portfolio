import Link from "next/link"
import  ThemeToggle  from "@/components/theme-toggle" 


export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
        <nav className="container flex max-w-3xl items-center justify-between">

            <div>
                <Link href='/' className="'font-serif text-2xl font-bold">
                Yash Gupta
                </Link>
            </div>
                <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground sm">
                    <li href='/blog' className="transition-colors hover:text-foreground">
                        Blog
                    </li>
                    <li href='/projects'className="transition-colors hover:text-foreground>
                        Projects
                    </li>
                    <li href='/contact' className="transition-colors hover:text-foreground>
                        Contact
                    </li>
                </ul>
                <div>
                    <ThemeToggle />
            </div>

        </nav>
        
        
        
      </header>  
        )
}
