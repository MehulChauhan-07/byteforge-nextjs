import { Button } from "@/components/ui/button"
import { Code, BookOpen, ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Master Java Programming with ByteForge
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              An intuitive learning platform designed to help you become a proficient Java developer through interactive
              lessons, hands-on practice, and AI-powered assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Start Learning <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Explore Features <BookOpen className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-muted-foreground">
              <Code className="h-4 w-4 mr-2" />
              <span>No prior programming experience required</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Java code editor interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-4 shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Interactive Compiler</p>
                  <p className="text-xs text-muted-foreground">Write & run Java code instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

