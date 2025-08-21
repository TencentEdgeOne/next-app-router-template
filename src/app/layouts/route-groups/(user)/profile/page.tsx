import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function ProfilePage() {
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
            用户资料页面
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            这个页面位于 <code className="bg-muted px-2 py-1 rounded text-primary">(user)</code> Route Group 中，
            路径为 <code className="bg-muted px-2 py-1 rounded text-primary">/layouts/route-groups/profile</code>
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* User Profile Card */}
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">张三</CardTitle>
              <p className="text-muted-foreground">高级用户</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">邮箱</p>
                    <p className="text-sm text-muted-foreground">zhangsan@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">电话</p>
                    <p className="text-sm text-muted-foreground">+86 138 0000 0000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">地址</p>
                    <p className="text-sm text-muted-foreground">北京市朝阳区</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">会员等级</p>
                    <p className="text-sm text-muted-foreground">VIP 金牌会员</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Route Group Explanation */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Route Group 特性展示</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">当前路由信息</h4>
                    <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                      <div>文件路径: app/layouts/route-groups/(user)/profile/page.tsx</div>
                      <div>URL路径: /layouts/route-groups/profile</div>
                      <div>Route Group: (user)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Route Group 特点</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• (user) 文件夹不影响 URL 路径</li>
                      <li>• 可以在同一层级组织不同类型的路由</li>
                      <li>• 便于代码管理和权限控制</li>
                      <li>• 支持不同的布局和中间件</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>其他 Route Groups 页面</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button asChild variant="outline" className="justify-start">
                  <Link href="/layouts/route-groups/orders">
                    <User className="w-4 h-4 mr-2" />
                    订单历史 (user)
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <Link href="/layouts/route-groups/dashboard">
                    <User className="w-4 h-4 mr-2" />
                    管理面板 (admin)
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <Link href="/layouts/route-groups/about">
                    <User className="w-4 h-4 mr-2" />
                    关于我们 (public)
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <Link href="/layouts/route-groups/users">
                    <User className="w-4 h-4 mr-2" />
                    用户管理 (admin)
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 