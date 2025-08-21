import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FileQuestion, Play, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FileQuestion className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Next.js App Router - Not Found UI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Not Found UI 是 Next.js 中的一个特殊功能，通过创建 not-found.js 文件，
            可以在用户访问不存在的页面时自动显示自定义的 404 界面。
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            当路由不存在或调用 notFound() 函数时，Next.js 会自动显示最近的 not-found.js 边界，
            让用户看到友好的 404 信息而不是默认的错误页面。
          </p>
        </div>

        <div className="space-y-8">
          {/* 演示入口 */}
          <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-yellow-600">
                🔍 Not-Found.js 实时演示
              </CardTitle>
              <p className="text-muted-foreground">
                体验 Next.js 的 not-found.js 文件约定如何工作
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-4">
                  点击下方按钮进入专门的演示页面，该页面会调用 notFound() 函数，真正触发 not-found.js 的显示。
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-6">
                  <Link href="/file-conventions/not-found/demo">
                    <Play className="w-5 h-5 mr-2" />
                    进入 Not-Found.js 演示
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  演示页面会调用 notFound() 函数，然后显示 not-found.js 界面
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 文件结构 */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>当前文件结构</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-background/50 p-4 rounded-lg border border-border/20">
                <div className="font-mono text-sm text-muted-foreground space-y-1">
                  <div>app/file-conventions/not-found/</div>
                  <div>├── not-found.js       ← 这个文件定义了 404 界面</div>
                  <div>├── page.tsx           ← 当前入口页面（同步）</div>
                  <div>└── demo/</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;└── page.tsx     ← 演示页面（会调用 notFound()，触发 not-found.js）</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-yellow-600 font-medium">
                  ✅ 演示页面会真正调用 notFound() 并触发 not-found.js，而入口页面保持稳定
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <FileText className="w-4 h-4 mr-2" />
            查看更多文档
          </Button>
        </div>
      </main>
    </div>
  );
} 