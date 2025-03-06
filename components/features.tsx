import { Code, MessageSquare, BookOpen, Server, Lightbulb, FileText } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Integrated Java Compiler",
      description: "Write, compile, and run Java code directly in your browser without any setup or installation.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "AI-Powered Assistant",
      description:
        "Get instant help with coding problems, explanations, and personalized guidance from our AI chatbot.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Smart Note-Taking",
      description: "Save important concepts, code snippets, and personal notes organized by topics and lessons.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Structured Curriculum",
      description:
        "Follow a carefully designed learning path from Java basics to advanced concepts and real-world applications.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Project-Based Learning",
      description: "Apply your knowledge by building real Java applications with guided projects and challenges.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Interactive Exercises",
      description:
        "Practice with hands-on coding exercises and quizzes that reinforce your understanding of Java concepts.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Platform Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ByteForge provides everything you need to learn Java programming effectively, from beginner to advanced
            levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

