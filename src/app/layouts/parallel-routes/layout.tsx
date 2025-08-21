import Header from "@/components/Header";
import { ReactNode } from "react";

interface ParallelRoutesLayoutProps {
  children: ReactNode;
  messages: ReactNode;
  users: ReactNode;
  settings: ReactNode;
  default: ReactNode;
}

export default function ParallelRoutesLayout({
  children,
  messages,
  users,
  settings,
  default: defaultSlot
}: ParallelRoutesLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Parallel Routes 实际应用</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            这个页面真正使用了 Next.js 的 Parallel Routes 特性。通过 @folder 约定，
            三个插槽（@messages、@users、@settings）同时渲染，每个插槽都有独立的内容和状态。
          </p>
        </div>

        {/* Parallel Routes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Messages Slot */}
          <div className="bg-card border border-border/20 rounded-lg overflow-hidden">
            {messages}
          </div>

          {/* Users Slot */}
          <div className="bg-card border border-border/20 rounded-lg overflow-hidden">
            {users}
          </div>

          {/* Settings Slot */}
          <div className="bg-card border border-border/20 rounded-lg overflow-hidden">
            {settings}
          </div>
        </div>

        {/* Default Slot (hidden by default) */}
        <div className="hidden">
          {defaultSlot}
        </div>

        {/* Explanation */}
        <div className="mt-8 p-6 bg-muted/30 border border-border/20 rounded-lg">
          <h3 className="text-lg font-medium mb-3">技术实现说明</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">文件结构</h4>
              <div className="font-mono bg-background/50 p-3 rounded border">
                app/layouts/parallel-routes/
                <br />
                ├── @messages/page.tsx
                <br />
                ├── @users/page.tsx
                <br />
                ├── @settings/page.tsx
                <br />
                ├── @default/page.tsx
                <br />
                └── layout.tsx
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">关键特性</h4>
              <ul className="space-y-1">
                <li>• 使用 @folder 约定创建插槽</li>
                <li>• 在 layout.tsx 中同时渲染多个插槽</li>
                <li>• 每个插槽独立维护状态</li>
                <li>• 支持默认插槽和条件渲染</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 