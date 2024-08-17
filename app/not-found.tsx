import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="bg-slate-500 w-screen h-screen flex flex-col justify-center items-center">
            <p className="text-white text-4xl font-bold py-4">Sorry we couldn't find the requested page</p>
            <Button>
                <Link href='/' className="px-2 py-2 dark:text-white text-2xl">Return Home</Link>
            </Button>
        </div>
    )
}