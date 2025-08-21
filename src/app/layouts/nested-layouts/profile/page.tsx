import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Calendar, MapPin } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-purple-600">
            👤 个人资料
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            这是个人资料页面，只使用外层布局，没有额外的内层布局。
          </p>
          <p className="text-sm text-muted-foreground">
            注意与设置页面的区别：这里没有侧边栏，只有页面内容。
          </p>
        </CardContent>
      </Card>

      {/* Profile Information */}
      <Card className="bg-card/80 border-border/30">
        <CardHeader>
          <CardTitle className="text-xl">个人信息</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Avatar */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">张三</h3>
                <p className="text-sm text-muted-foreground">产品设计师</p>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg border border-border/20">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">邮箱</p>
                    <p className="text-sm text-muted-foreground">zhangsan@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg border border-border/20">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">加入时间</p>
                    <p className="text-sm text-muted-foreground">2024年1月</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg border border-border/20">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">所在地</p>
                    <p className="text-sm text-muted-foreground">北京市朝阳区</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg border border-border/20">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">部门</p>
                    <p className="text-sm text-muted-foreground">设计团队</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bio Section */}
      <Card className="bg-card/80 border-border/30">
        <CardHeader>
          <CardTitle>个人简介</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            热爱设计，专注于用户体验和界面设计。拥有5年以上的产品设计经验，
            熟悉各种设计工具和前端技术。喜欢探索新的设计趋势和技术创新，
            致力于创造简洁、美观、易用的产品界面。
          </p>
        </CardContent>
      </Card>

      {/* Layout Information */}
      <Card className="bg-muted/30 border-border/20">
        <CardHeader>
          <CardTitle>布局结构对比</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">当前页面（个人资料）</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs space-y-1">
                <div>1. app/layouts/nested-layouts/layout.tsx ← 外层布局</div>
                <div>2. app/layouts/nested-layouts/profile/page.tsx ← 页面内容（当前）</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">设置页面（多层嵌套）</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs space-y-1">
                <div>1. app/layouts/nested-layouts/layout.tsx ← 外层布局</div>
                <div>2. app/layouts/nested-layouts/settings/layout.tsx ← 内层布局</div>
                <div>3. app/layouts/nested-layouts/settings/page.tsx ← 页面内容</div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <p className="text-sm text-purple-600 font-medium">
              ✅ 这展示了 Nested Layouts 的灵活性：有些页面可以有多层布局，有些页面只需要一层
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 