"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function CodeDemo() {
  const [output, setOutput] = useState<string | null>(null)

  const javaCode = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, ByteForge!");
        
        // A simple loop example
        for (int i = 1; i <= 3; i++) {
            System.out.println("Java is fun! Count: " + i);
        }
    }
}`

  const handleRunCode = () => {
    setOutput(`> javac HelloWorld.java
> java HelloWorld
Hello, ByteForge!
Java is fun! Count: 1
Java is fun! Count: 2
Java is fun! Count: 3`)
  }

  return (
    <div className="flex flex-col rounded-md overflow-hidden">
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2 text-white">
        <div className="text-sm font-medium">HelloWorld.java</div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="h-8 gap-1 text-white hover:bg-slate-700 hover:text-white"
            onClick={handleRunCode}
          >
            <Play className="h-4 w-4" />
            Run
          </Button>
        </div>
      </div>
      <div className="bg-slate-900 p-4 text-white">
        <pre className="text-sm font-mono">
          <code>{javaCode}</code>
        </pre>
      </div>
      {output && (
        <div className="bg-black p-4 text-green-400">
          <pre className="text-sm font-mono">
            <code>{output}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

