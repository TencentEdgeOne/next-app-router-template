import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

// 会抛出错误的服务器组件
async function ErrorThrowingComponent() {
  // 模拟一个服务器端错误
  throw new Error("DEMO_ERROR: 这是一个演示错误，用于展示 error.js 的工作原理。API 请求失败或数据处理出错。");
  
  // 这行代码永远不会执行，但展示了正常情况下的内容
  return (
    <div className="text-center p-8">
      <h3 className="text-xl font-semibold text-green-500 mb-2">没有错误</h3>
      <p className="text-muted-foreground">
        如果你看到这个消息，说明没有错误发生
      </p>
    </div>
  );
}

// 主演示页面 - 服务器组件
export default async function ErrorDemoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Error.js 实时演示
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            这个页面包含会抛出错误的组件，将触发 error.js 显示错误界面
          </p>
        </div>

        {/* 这个组件会抛出错误，触发 error.js */}
        <ErrorThrowingComponent />
      </main>
    </div>
  );
} 