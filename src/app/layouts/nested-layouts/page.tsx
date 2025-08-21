import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Github, Settings, Layout } from "lucide-react";
import NestedLayoutDemo from "./nested-layout-demo";
import Header from "@/components/Header";

export default function NestedLayoutsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />


      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Next.js App Router - Nested Layouts
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
            <p>
              在 Next.js 中，Layouts 是特殊的 React 组件，它们包装页面并共享 UI 元素。当用户在不同页面间导航时，Layout 组件会保持其状态，而页面组件会重新渲染。
            </p>
            <p>
              这种设计模式特别适用于需要在多个页面间保持状态的场景，比如一个带有标签页的 Web 应用。当用户在标签页间切换时，标签页的容器（Layout）保持不变，而内容区域（Page）会更新。这样可以保持计数器等状态，提升用户体验和性能。
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <NestedLayoutDemo />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            查看文档
          </Button>
        </div>
      </main>
    </div>
  );
} 