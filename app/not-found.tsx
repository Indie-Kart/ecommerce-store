import Link from "next/link"
export default function NotFound() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center space-y-6 px-4 text-center">
      <div className="space-y-2">
        <div className="flex items-center justify-center">
          <img src="/404.png" alt="404" className="w-56 h-56" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Oops! Page Not Found</h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          The page you are looking for could not be located. Please check the URL or try navigating back to the homepage.
        </p>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition-all duration-300">
          <Link href="/">
            Go back to homepage
          </Link>
        </button>
      </div>
    </div>
  )
} 