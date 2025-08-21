import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";
export const dynamic = 'force-dynamic';

// 整个页面异步 - 这样会触发 loading.js
export default async function LoadingDemoPage() {
  // 3秒延迟来确保 loading.js 能被看到
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Loading.js 实时演示
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            这个页面是异步组件，加载时触发了 loading.js 显示加载界面
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-green-500/10 border-green-500/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <CardTitle className="text-xl text-green-500">
                ✅ Loading.js 演示成功！
              </CardTitle>
              <p className="text-muted-foreground">
                刚才显示的加载界面就是来自 loading.js 文件
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">数据加载完成</h4>
                  <p className="text-sm text-muted-foreground">
                    这个异步页面组件经过了 3 秒的加载，在此期间 Next.js 自动显示了 loading.js 中定义的回退界面。
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium">
                    🎉 恭喜！你已经成功体验了 Next.js 的 loading.js 文件约定
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 返回按钮和说明 */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/file-conventions/loading">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回介绍页面
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              要重新体验 loading.js，请从介绍页面重新进入此演示
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 