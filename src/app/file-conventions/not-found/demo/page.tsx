import { notFound } from "next/navigation";
import Header from "@/components/Header";

// 会调用 notFound() 的演示页面
export default function NotFoundDemoPage() {
  // 立即调用 notFound() 函数，这会触发 not-found.js
  notFound();
  
  // 这行代码永远不会执行，但展示了正常情况下的内容
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Not-Found.js 实时演示
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            如果你看到这个消息，说明 notFound() 函数没有正常工作
          </p>
        </div>
      </main>
    </div>
  );
} 