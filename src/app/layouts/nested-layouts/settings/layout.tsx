import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Settings, User, Bell, Shield, Palette } from "lucide-react";

interface SettingsLayoutProps {
  children: ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const settingsCategories = [
    {
      name: "通用设置",
      href: "/layouts/nested-layouts/settings",
      icon: Settings,
      description: "基本配置和首选项"
    },
    {
      name: "个人资料",
      href: "/layouts/nested-layouts/settings/profile",
      icon: User,
      description: "个人信息和头像"
    },
    {
      name: "通知设置",
      href: "/layouts/nested-layouts/settings/notifications",
      icon: Bell,
      description: "消息和提醒配置"
    },
    {
      name: "隐私安全",
      href: "/layouts/nested-layouts/settings/privacy",
      icon: Shield,
      description: "隐私和安全选项"
    },
    {
      name: "外观主题",
      href: "/layouts/nested-layouts/settings/appearance",
      icon: Palette,
      description: "界面主题和样式"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Settings Page Header */}
      <Card className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-green-600">
            ⚙️ 设置中心
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            这是一个有内层布局的设置页面，展示了 Nested Layouts 的多层嵌套特性
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Sidebar - 内层布局的侧边栏 */}
        <div className="lg:col-span-1">
          <Card className="bg-card/80 border-border/30">
            <CardHeader>
              <CardTitle className="text-lg">设置分类</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {settingsCategories.map((category) => (
                <Button
                  key={category.href}
                  asChild
                  variant="outline"
                  className="w-full justify-start h-auto p-3"
                >
                  <Link href={category.href}>
                    <div className="flex items-start space-x-3">
                      <category.icon className="w-5 h-5 mt-0.5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium text-sm">{category.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {category.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Settings Content - 内层布局的内容区域 */}
        <div className="lg:col-span-3">
          <Card className="bg-card/80 border-border/30">
            <CardContent className="p-6">
              {children}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Layout Information */}
      <Card className="bg-muted/30 border-border/20">
        <CardHeader>
          <CardTitle>多层 Nested Layout 结构</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">布局层次</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs space-y-1">
                <div>1. app/layouts/nested-layouts/layout.tsx ← 外层布局</div>
                <div>2. app/layouts/nested-layouts/settings/layout.tsx ← 内层布局（当前）</div>
                <div>3. app/layouts/nested-layouts/settings/page.tsx ← 页面内容</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">嵌套特性</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• 外层布局提供导航和标题</li>
                <li>• 内层布局提供设置侧边栏</li>
                <li>• 页面内容独立渲染</li>
                <li>• 两层布局状态都会保持</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 