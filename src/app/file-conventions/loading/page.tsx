import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Loader2, Play, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Loader2 className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Next.js App Router - Loading UI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Loading UI 是 Next.js 中的一个强大功能，通过创建 loading.js 文件，
            可以在页面或组件加载时自动显示回退 UI，提升用户体验。
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            当路由段正在加载时，Next.js 会自动显示最近的 loading.js 边界，
            直到内容加载完成。这对于数据获取、代码分割等场景非常有用。
          </p>
        </div>

        <div className="space-y-8">
          {/* 演示入口 */}
          <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                🚀 Loading.js 实时演示
              </CardTitle>
              <p className="text-muted-foreground">
                体验 Next.js 的 loading.js 文件约定如何工作
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-4">
                  点击下方按钮进入专门的演示页面，该页面包含异步组件，会真正触发 loading.js 的显示。
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Link href="/file-conventions/loading/demo">
                    <Play className="w-5 h-5 mr-2" />
                    进入 Loading.js 演示
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
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
                  <div>app/file-conventions/loading/</div>
                  <div>├── loading.js       ← 这个文件定义了加载界面</div>
                  <div>├── page.tsx         ← 当前入口页面（同步）</div>
                  <div>└── demo/</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;└── page.tsx   ← 演示页面（异步，会触发 loading.js）</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-sm text-green-600 font-medium">
                  ✅ 演示页面会真正触发 loading.js，而入口页面保持快速加载
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