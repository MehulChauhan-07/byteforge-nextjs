import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import CodeDemo from "@/components/code-demo"

export default function IntroductionPage() {
  return (
    <div className="mx-auto max-w-3xl py-6">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Introduction to Java</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>Java Fundamentals</span>
          <span className="mx-2">•</span>
          <span>Beginner</span>
          <span className="mx-2">•</span>
          <span>10 min read</span>
        </div>
      </div>

      <div className="prose prose-slate max-w-none dark:prose-invert">
        <p>
          Java is a high-level, class-based, object-oriented programming language that is designed to have as few
          implementation dependencies as possible. It is a general-purpose programming language intended to let
          application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all
          platforms that support Java without the need for recompilation.
        </p>

        <h2>History of Java</h2>
        <p>
          Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle
          Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform. The original and
          reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun
          under proprietary licenses.
        </p>

        <h2>Features of Java</h2>
        <ul>
          <li>
            <strong>Simple:</strong> Java is designed to be easy to learn and use.
          </li>
          <li>
            <strong>Object-Oriented:</strong> Java is based on the object-oriented programming paradigm.
          </li>
          <li>
            <strong>Platform-Independent:</strong> Java follows the "write once, run anywhere" principle.
          </li>
          <li>
            <strong>Secure:</strong> Java has built-in security features.
          </li>
          <li>
            <strong>Robust:</strong> Java emphasizes early checking for possible errors.
          </li>
          <li>
            <strong>Multithreaded:</strong> Java has built-in support for multithreaded programming.
          </li>
        </ul>

        <h2>Your First Java Program</h2>
        <p>Let's start with the traditional "Hello, World!" program in Java:</p>

        <div className="my-6">
          <CodeDemo />
        </div>

        <h3>Explanation:</h3>
        <ul>
          <li>
            <code>public class HelloWorld</code>: This declares a class named HelloWorld. In Java, every application
            must contain at least one class.
          </li>
          <li>
            <code>public static void main(String[] args)</code>: This is the entry point of the Java application. The
            Java Virtual Machine (JVM) calls this method when the program starts.
          </li>
          <li>
            <code>System.out.println("Hello, ByteForge!");</code>: This line prints the text "Hello, ByteForge!" to the
            console.
          </li>
        </ul>

        <h2>Java Development Environment</h2>
        <p>To write and run Java programs, you need:</p>
        <ol>
          <li>
            <strong>Java Development Kit (JDK):</strong> This includes the Java Runtime Environment (JRE), an
            interpreter/loader (Java), a compiler (javac), an archiver (jar), a documentation generator (Javadoc), and
            other tools needed in Java development.
          </li>
          <li>
            <strong>Integrated Development Environment (IDE):</strong> While not strictly necessary, an IDE like
            Eclipse, IntelliJ IDEA, or NetBeans can make Java development much easier.
          </li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          Java is a versatile and powerful programming language with a wide range of applications. Its platform
          independence, security features, and object-oriented nature make it a popular choice for developing enterprise
          applications, mobile applications (Android), web applications, and more.
        </p>
        <p>In the next lesson, we'll dive deeper into Java variables and data types.</p>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href="/topics">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Topics
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/topics/java-fundamentals/variables-data-types">
            Next: Variables & Data Types
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

