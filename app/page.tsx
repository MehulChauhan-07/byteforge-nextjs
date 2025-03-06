import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  MessageSquare,
  BookOpen,
  Layers,
  Zap,
  FileText,
} from "lucide-react";
import AuthModal from "@/components/auth-modal";
import FeatureCard from "@/components/feature-card";
import CodeDemo from "@/components/code-demo";
import { MobileSidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MobileSidebar />
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ByteForge</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/topics"
              className="text-sm font-medium hover:text-primary"
            >
              Topics
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <AuthModal />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master Java Programming with ByteForge
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    An user-friendly learning platform designed to help you become a
                    Java expert through interactive lessons, real-time coding,
                    and AI assistance.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1" asChild>
                    <Link href="/topics">
                      Start Learning <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#features">Explore Features</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Interactive Lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Live Compiler</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span>AI Assistant</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 w-full max-w-[600px] rounded-lg border bg-background p-2 shadow-lg">
                <CodeDemo />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-50 py-20 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features to Accelerate Your Learning
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ByteForge provides everything you need to master Java
                  programming, from beginner to advanced levels.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Code className="h-10 w-10 text-primary" />}
                title="Integrated Java Compiler"
                description="Write, compile, and run Java code directly in your browser with real-time error checking and syntax highlighting."
              />
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10 text-primary" />}
                title="AI-Powered Assistant"
                description="Get instant help with coding problems, explanations, and personalized learning recommendations."
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-primary" />}
                title="Smart Note-Taking"
                description="Save important concepts, code snippets, and create your own knowledge base as you learn."
              />
              <FeatureCard
                icon={<Layers className="h-10 w-10 text-primary" />}
                title="Structured Curriculum"
                description="Follow a carefully designed learning path from Java basics to advanced concepts and frameworks."
              />
              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-primary" />}
                title="Comprehensive Resources"
                description="Access a vast library of tutorials, examples, and reference materials to support your learning."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Project-Based Learning"
                description="Apply your knowledge by building real-world projects with guided instructions and feedback."
              />
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="gap-1" asChild>
                <Link href="/topics">
                  Browse Java Topics <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Master Java?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join ByteForge today and start your journey to becoming a Java
                  expert.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1" asChild>
                  <Link href="/topics">
                    Get Started for Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50 dark:bg-slate-900">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ByteForge</span>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link
              href="/topics"
              className="text-sm font-medium hover:text-primary"
            >
              Topics
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ByteForge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
