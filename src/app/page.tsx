import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FileText, Layout, Route, Zap, AlertTriangle, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Next.js App Router Playground
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            以交互式方式演示 Next.js 的 App Router 的核心特性, 用于探索如 Nested layouts、Loading 等 Next.js 功能。
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200">
              一键部署
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200">
              查看文档
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Layouts Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Layout className="w-6 h-6 mr-2 text-primary" />
              Layouts
            </h2>
            <div className="space-y-4">
              <a href="/layouts/nested-layouts" className="mb-4 block">
              <Card className="bg-card/80 border-border/30 hover:border-primary/50 hover:bg-card/90 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Route className="w-4 h-4 mr-2 text-primary" />
                    Nested layouts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    嵌套布局在路由间共享 UI 并保持状态
                  </CardDescription>
                </CardContent>
              </Card>
              </a>
              <a href="/layouts/route-groups" className="mb-4 block">
              <Card className="bg-card/80 border-border/30 hover:border-primary/50 hover:bg-card/90 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Route Groups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    路由组组织路由而不影响 URL 路径
                  </CardDescription>
                </CardContent>
              </Card>
              </a>
              <a href="/layouts/parallel-routes" className="mb-4 block">
              <Card className="bg-card/80 border-border/30 hover:border-primary/50 hover:bg-card/90 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layout className="w-4 h-4 mr-2 text-primary" />
                    Parallel Routes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    并行路由在同一布局渲染多个独立内容
                  </CardDescription>
                </CardContent>
              </Card>
            </a>

            </div> 
          </div>

          {/* File Conventions Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-primary" />
              File Conventions
            </h2>
            <div className="space-y-4">
              <a href="/file-conventions/loading" className="mb-4 block">
                <Card className="bg-card/80 border-border/30 hover:border-primary/50 hover:bg-card/90 transition-all duration-200 hover:shadow-lg cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-primary" />
                      Loading
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      loading.js 显示数据加载时的回退 UI
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>

              <a href="/file-conventions/error" className="mb-4 block">
                <Card className="bg-card/80 border-border/30 hover:border-primary/50 hover:bg-card/90 transition-all duration-200 hover:shadow-lg cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2 text-primary" />
                      Error
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      error.js 捕获错误并提供自定义回退界面
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>

              <Link href="/file-conventions/not-found" className="mb-4 block">
                <Card className="bg-card/80 border-border/30 hover:border-primary/50 hover:bg-card/90 transition-all duration-200 hover:shadow-lg cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Search className="w-4 h-4 mr-2 text-primary" />
                      Not Found
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      not-found.js 处理未找到路由的自定义 404 UI
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
