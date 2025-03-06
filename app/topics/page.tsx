import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export default function TopicsPage() {
  return (
    <div className="mx-auto max-w-4xl py-6">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Java Topics</h1>
        <p className="text-muted-foreground">
          Explore our comprehensive collection of Java tutorials, examples, and practice problems. From basic concepts
          to advanced techniques, we've got you covered.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Java Fundamentals",
            description: "Master the core concepts of Java programming language.",
            href: "/topics/java-fundamentals/introduction",
          },
          {
            title: "Object-Oriented Programming",
            description: "Learn about classes, objects, inheritance, and polymorphism.",
            href: "/topics/oop/classes-objects",
          },
          {
            title: "Data Structures",
            description: "Implement and understand essential data structures in Java.",
            href: "/topics/data-structures/arrays",
          },
          {
            title: "Algorithms",
            description: "Study and implement common algorithms for problem-solving.",
            href: "/topics/algorithms/searching",
          },
          {
            title: "Java Collections",
            description: "Work with Java's built-in collection framework.",
            href: "/topics/collections/arraylist",
          },
          {
            title: "Exception Handling",
            description: "Learn how to handle errors and exceptions in Java.",
            href: "/topics/exceptions/try-catch",
          },
        ].map((topic) => (
          <div
            key={topic.title}
            className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{topic.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{topic.description}</p>
            <Link href={topic.href} className="mt-4 inline-flex items-center text-sm font-medium text-primary">
              Start Learning
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
        <div className="flex flex-col items-center space-y-4 text-center sm:flex-row sm:space-x-4 sm:space-y-0 sm:text-left">
          <div className="rounded-full bg-primary/10 p-3">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">Ready to dive deeper?</h3>
            <p className="text-muted-foreground">
              Explore our interactive lessons and practice problems to master Java programming.
            </p>
          </div>
          <div className="sm:ml-auto">
            <Button>View All Topics</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

