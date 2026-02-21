import { Loader2 } from "lucide-react"

function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] w-screen">
      <Loader2 className="size-10 animate-spin" />
    </div>
  )
}

export default LoadingPage
