import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp, DollarSign } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "总访问量",
      value: "12,345",
      change: "+12%",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      title: "活跃用户",
      value: "1,234",
      change: "+8%",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "增长率",
      value: "23.5%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "收入",
      value: "¥45,678",
      change: "+15%",
      icon: DollarSign,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-blue-600">
            📊 仪表板页面
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            这是仪表板页面，展示各种统计数据和图表。
          </p>
          <p className="text-sm text-muted-foreground">
            注意：页面标题栏和导航保持不变，只有内容区域更新了。
          </p>
        </CardContent>
      </Card>

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
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Section */}
      <Card className="bg-card/80 border-border/30">
        <CardHeader>
          <CardTitle>数据趋势</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">这里可以放置图表组件</p>
          </div>
        </CardContent>
      </Card>

      {/* Page Info */}
      <Card className="bg-muted/30 border-border/20">
        <CardHeader>
          <CardTitle>页面技术信息</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">当前文件路径</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                app/layouts/nested-layouts/dashboard/page.tsx
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">使用的布局</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                app/layouts/nested-layouts/layout.tsx ← 外层布局
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-600 font-medium">
              ✅ 这个页面共享了外层布局的导航和标题，只有内容区域是独立的
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 