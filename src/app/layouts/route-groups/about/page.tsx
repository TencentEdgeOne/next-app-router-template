import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ArrowLeft, Info, Users, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/layouts/route-groups">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-500" />
                <span className="text-lg font-semibold">关于我们</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              路由组: (public) - 不影响URL路径
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">关于我们</h1>
          <p className="text-muted-foreground">
            这是 Public 路由组的关于页面。URL 路径是 <code className="bg-muted px-2 py-1 rounded">/layouts/route-groups/about</code>，
            但实际的文件结构是 <code className="bg-muted px-2 py-1 rounded">(public)/about/page.tsx</code>
          </p>
        </div>

        {/* Company Info */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Info className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">公司简介</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              我们是一家专注于 Next.js 技术栈的创新型公司，致力于为开发者提供最佳的前端开发体验。
              通过深入理解 App Router 和现代 Web 开发技术，我们帮助客户构建高性能、可扩展的 Web 应用。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              我们的团队由经验丰富的全栈开发者组成，精通 React、TypeScript、Tailwind CSS 等现代技术栈。
              我们相信，通过正确的技术选择和架构设计，可以创造出既美观又实用的数字产品。
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-500/10 border-green-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-500" />
                <CardTitle className="text-lg">创新技术</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                采用最新的 Next.js App Router 技术，提供最佳的性能和开发体验
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <CardTitle className="text-lg">专业团队</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                拥有经验丰富的开发团队，确保项目质量和交付时间
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-500/10 border-purple-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-purple-500" />
                <CardTitle className="text-lg">优质服务</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                提供全方位的技术支持和服务，从设计到部署的一站式解决方案
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <Card className="bg-muted/30 border-border/20">
          <CardHeader>
            <CardTitle>联系我们</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">邮箱</div>
                    <div className="text-sm text-muted-foreground">contact@example.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">电话</div>
                    <div className="text-sm text-muted-foreground">+86 400-123-4567</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">网站</div>
                    <div className="text-sm text-muted-foreground">www.example.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">地址</div>
                    <div className="text-sm text-muted-foreground">北京市朝阳区科技园区</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-8 flex space-x-4">
          <Link href="/layouts/route-groups">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回概览
            </Button>
          </Link>
          <Link href="/layouts/route-groups/contact">
            <Button>
              联系我们
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
} 