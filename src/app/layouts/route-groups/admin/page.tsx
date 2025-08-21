import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, BarChart3, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
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
                <Settings className="w-5 h-5 text-red-500" />
                <span className="text-lg font-semibold">Admin Dashboard</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              路由组: (admin) - 不影响URL路径
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">管理仪表板</h1>
          <p className="text-muted-foreground">
            这是 Admin 路由组的 Dashboard 页面。注意 URL 路径是 <code className="bg-muted px-2 py-1 rounded">/layouts/route-groups/admin</code>，
            但实际的文件结构是 <code className="bg-muted px-2 py-1 rounded">(admin)/page.tsx</code>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-red-500/10 border-red-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-red-500" />
                <CardTitle className="text-lg">总用户数</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-500">1,234</div>
              <p className="text-sm text-muted-foreground mt-2">较上月增长 12%</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <CardTitle className="text-lg">活跃用户</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500">856</div>
              <p className="text-sm text-muted-foreground mt-2">今日活跃用户</p>
            </CardContent>
          </Card>

          <Card className="bg-green-500/10 border-green-500/20">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-green-500" />
                <CardTitle className="text-lg">系统状态</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">正常</div>
              <p className="text-sm text-muted-foreground mt-2">所有服务运行正常</p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <Card className="bg-muted/30 border-border/20">
          <CardHeader>
            <CardTitle>Admin 路由组导航</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/layouts/route-groups/admin/users">
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="font-medium">用户管理</div>
                        <div className="text-sm text-muted-foreground">管理用户账户和权限</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/layouts/route-groups/admin/settings">
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-medium">系统设置</div>
                        <div className="text-sm text-muted-foreground">配置系统参数</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/layouts/route-groups">
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">返回概览</div>
                        <div className="text-sm text-muted-foreground">回到路由组演示页面</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
} 