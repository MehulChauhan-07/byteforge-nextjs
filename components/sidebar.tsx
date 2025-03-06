"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Code,
  Box,
  FileCode,
  Database,
  GitBranch,
  AlertTriangle,
  Layers,
  FileText,
  RefreshCw,
  Coffee,
} from "lucide-react"

interface TopicProps {
  title: string
  icon?: React.ReactNode
  href?: string
  subtopics?: { title: string; href: string }[]
}

const topics: TopicProps[] = [
  {
    title: "Java Fundamentals",
    icon: <Coffee className="h-4 w-4" />,
    subtopics: [
      { title: "Introduction to Java", href: "/topics/java-fundamentals/introduction" },
      { title: "Variables & Data Types", href: "/topics/java-fundamentals/variables-data-types" },
      { title: "Operators", href: "/topics/java-fundamentals/operators" },
      { title: "Control Flow", href: "/topics/java-fundamentals/control-flow" },
      { title: "Arrays", href: "/topics/java-fundamentals/arrays" },
      { title: "Methods", href: "/topics/java-fundamentals/methods" },
    ],
  },
  {
    title: "Object-Oriented Programming",
    icon: <Box className="h-4 w-4" />,
    subtopics: [
      { title: "Classes & Objects", href: "/topics/oop/classes-objects" },
      { title: "Inheritance", href: "/topics/oop/inheritance" },
      { title: "Polymorphism", href: "/topics/oop/polymorphism" },
      { title: "Encapsulation", href: "/topics/oop/encapsulation" },
      { title: "Abstraction", href: "/topics/oop/abstraction" },
      { title: "Interfaces", href: "/topics/oop/interfaces" },
    ],
  },
  {
    title: "Data Structures",
    icon: <Database className="h-4 w-4" />,
    subtopics: [
      { title: "Arrays", href: "/topics/data-structures/arrays" },
      { title: "Linked Lists", href: "/topics/data-structures/linked-lists" },
      { title: "Stacks", href: "/topics/data-structures/stacks" },
      { title: "Queues", href: "/topics/data-structures/queues" },
      { title: "Trees", href: "/topics/data-structures/trees" },
      { title: "Graphs", href: "/topics/data-structures/graphs" },
      { title: "Hash Tables", href: "/topics/data-structures/hash-tables" },
    ],
  },
  {
    title: "Algorithms",
    icon: <Code className="h-4 w-4" />,
    subtopics: [
      { title: "Searching Algorithms", href: "/topics/algorithms/searching" },
      { title: "Sorting Algorithms", href: "/topics/algorithms/sorting" },
      { title: "Recursion", href: "/topics/algorithms/recursion" },
      { title: "Dynamic Programming", href: "/topics/algorithms/dynamic-programming" },
      { title: "Greedy Algorithms", href: "/topics/algorithms/greedy" },
    ],
  },
  {
    title: "Java Collections",
    icon: <Layers className="h-4 w-4" />,
    subtopics: [
      { title: "ArrayList", href: "/topics/collections/arraylist" },
      { title: "LinkedList", href: "/topics/collections/linkedlist" },
      { title: "HashSet", href: "/topics/collections/hashset" },
      { title: "HashMap", href: "/topics/collections/hashmap" },
      { title: "TreeMap", href: "/topics/collections/treemap" },
      { title: "PriorityQueue", href: "/topics/collections/priorityqueue" },
    ],
  },
  {
    title: "Exception Handling",
    icon: <AlertTriangle className="h-4 w-4" />,
    subtopics: [
      { title: "Try-Catch Blocks", href: "/topics/exceptions/try-catch" },
      { title: "Throw & Throws", href: "/topics/exceptions/throw-throws" },
      { title: "Custom Exceptions", href: "/topics/exceptions/custom-exceptions" },
      { title: "Best Practices", href: "/topics/exceptions/best-practices" },
    ],
  },
  {
    title: "Multithreading",
    icon: <RefreshCw className="h-4 w-4" />,
    subtopics: [
      { title: "Creating Threads", href: "/topics/multithreading/creating-threads" },
      { title: "Synchronization", href: "/topics/multithreading/synchronization" },
      { title: "Thread Pool", href: "/topics/multithreading/thread-pool" },
      { title: "Concurrent Collections", href: "/topics/multithreading/concurrent-collections" },
    ],
  },
  {
    title: "File I/O",
    icon: <FileText className="h-4 w-4" />,
    subtopics: [
      { title: "File Handling", href: "/topics/file-io/file-handling" },
      { title: "Byte Streams", href: "/topics/file-io/byte-streams" },
      { title: "Character Streams", href: "/topics/file-io/character-streams" },
      { title: "NIO Package", href: "/topics/file-io/nio-package" },
    ],
  },
  {
    title: "Java 8+ Features",
    icon: <FileCode className="h-4 w-4" />,
    subtopics: [
      { title: "Lambda Expressions", href: "/topics/java8/lambda-expressions" },
      { title: "Stream API", href: "/topics/java8/stream-api" },
      { title: "Optional Class", href: "/topics/java8/optional-class" },
      { title: "Default Methods", href: "/topics/java8/default-methods" },
      { title: "Date/Time API", href: "/topics/java8/datetime-api" },
    ],
  },
  {
    title: "Design Patterns",
    icon: <GitBranch className="h-4 w-4" />,
    subtopics: [
      { title: "Singleton Pattern", href: "/topics/design-patterns/singleton" },
      { title: "Factory Pattern", href: "/topics/design-patterns/factory" },
      { title: "Observer Pattern", href: "/topics/design-patterns/observer" },
      { title: "Strategy Pattern", href: "/topics/design-patterns/strategy" },
      { title: "Decorator Pattern", href: "/topics/design-patterns/decorator" },
    ],
  },
]

const Topic = ({ topic }: { topic: TopicProps }) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!topic.subtopics) {
    return (
      <Link
        href={topic.href || "#"}
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        {topic.icon}
        {topic.title}
      </Link>
    )
  }

  return (
    <div>
      <Button
        variant="ghost"
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {topic.icon}
          {topic.title}
        </div>
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-1 border-l pl-3">
          {topic.subtopics.map((subtopic) => (
            <Link
              key={subtopic.title}
              href={subtopic.href}
              className="flex items-center rounded-md px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {subtopic.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar({ className }: { className?: string }) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Java Topics</h2>
          <div className="space-y-1">
            <ScrollArea className="h-[calc(100vh-10rem)]">
              <div className="space-y-1 px-1">
                {topics.map((topic) => (
                  <Topic key={topic.title} topic={topic} />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

