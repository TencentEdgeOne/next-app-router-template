import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Users, BarChart3, ArrowLeft, TrendingUp, UserCheck, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function AdminDashboardPage() {
  const stats = [
    {
      title: "总用户数",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "活跃用户",
      value: "856",
      change: "+8%", 
      icon: UserCheck,
      color: "text-green-600"
    },
    {
      title: "系统负载",
      value: "67%",
      change: "-5%",
      icon: BarChart3,
      color: "text-orange-600"
    },
    {
      title: "待处理",
      value: "23",
      change: "+3",
      icon: AlertCircle,
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <Link href="/layouts/route-groups">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回 Route Groups 演示
            </Link>
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            管理仪表板
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            这个页面位于 <code className="bg-muted px-2 py-1 rounded text-primary">(admin)</code> Route Group 中，
            路径为 <code className="bg-muted px-2 py-1 rounded text-primary">/layouts/route-groups/dashboard</code>
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/80 border-border/30 hover:bg-card/90 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600">{stat.change}</span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2 text-red-600" />
                管理操作
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button asChild className="justify-start h-auto p-4 bg-background/50 hover:bg-background/80">
                  <Link href="/layouts/route-groups/users">
                    <div className="text-left">
                      <div className="font-medium">用户管理</div>
                      <div className="text-sm text-muted-foreground">管理系统用户和权限</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">系统设置</div>
                    <div className="text-sm text-muted-foreground">配置系统参数</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">数据分析</div>
                    <div className="text-sm text-muted-foreground">查看详细报告</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Route Group Explanation */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Route Group 管理页面特性</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">当前路径结构</h4>
                  <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                    <div>文件路径: app/layouts/route-groups/(admin)/dashboard/page.tsx</div>
                    <div>URL路径: /layouts/route-groups/dashboard</div>
                    <div>Route Group: (admin)</div>
                    <div>特性: 管理员专用页面</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Route Group 优势</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 将管理页面分组到 (admin) 中</li>
                    <li>• 可以设置专门的中间件和布局</li>
                    <li>• URL 路径保持简洁</li>
                    <li>• 便于权限控制和代码组织</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 