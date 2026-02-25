import { Loader2 } from "lucide-react"

function LoadingPage() {
  return (
    <div className="flex items-center justify-center max-w-5xl h-[calc(100vh-5rem)] m-auto">
      <Loader2 className="size-10 animate-spin" />
    </div>
  )
}

export default LoadingPage
