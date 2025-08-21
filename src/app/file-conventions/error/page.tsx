import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, Play, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Next.js App Router - Error UI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Error UI 是 Next.js 中的一个强大功能，通过创建 error.js 文件，
            可以在页面或组件出现错误时自动捕获并提供自定义回退界面。
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            当路由段出现错误时，Next.js 会自动显示最近的 error.js 边界，
            让用户看到友好的错误信息而不是崩溃的页面。
          </p>
        </div>

        <div className="space-y-8">
          {/* 演示入口 */}
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-red-600">
                🚨 Error.js 实时演示
              </CardTitle>
              <p className="text-muted-foreground">
                体验 Next.js 的 error.js 文件约定如何工作
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-4">
                  点击下方按钮进入专门的演示页面，该页面会抛出错误，真正触发 error.js 的显示。
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
                  <Link href="/file-conventions/error/demo">
                    <Play className="w-5 h-5 mr-2" />
                    进入 Error.js 演示
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  演示页面会抛出真实错误，然后显示 error.js 界面
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
                  <div>app/file-conventions/error/</div>
                  <div>├── error.js          ← 这个文件定义了错误界面</div>
                  <div>├── page.tsx          ← 当前入口页面（同步）</div>
                  <div>└── demo/</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;└── page.tsx    ← 演示页面（会抛出错误，触发 error.js）</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-600 font-medium">
                  ✅ 演示页面会真正抛出错误并触发 error.js，而入口页面保持稳定
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