import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h2 className="text-2xl font-bold mb-2">通用设置</h2>
        <p className="text-muted-foreground">
          管理你的账户基本设置和偏好配置
        </p>
      </div>

      {/* Basic Settings */}
      <Card className="bg-background/50 border-border/20">
        <CardHeader>
          <CardTitle className="text-lg">基本配置</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg border border-border/20">
              <h4 className="font-medium mb-2">用户名</h4>
              <p className="text-sm text-muted-foreground">张三</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border/20">
              <h4 className="font-medium mb-2">邮箱地址</h4>
              <p className="text-sm text-muted-foreground">zhangsan@example.com</p>
            </div>
          </div>
          
          <div className="p-4 bg-muted/30 rounded-lg border border-border/20">
            <h4 className="font-medium mb-2">界面语言</h4>
            <p className="text-sm text-muted-foreground">简体中文</p>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="bg-background/50 border-border/20">
        <CardHeader>
          <CardTitle className="text-lg">偏好设置</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/20">
            <div>
              <h4 className="font-medium">自动保存</h4>
              <p className="text-sm text-muted-foreground">自动保存你的更改</p>
            </div>
            <div className="text-green-600 font-medium">已启用</div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/20">
            <div>
              <h4 className="font-medium">桌面通知</h4>
              <p className="text-sm text-muted-foreground">允许发送桌面通知</p>
            </div>
            <div className="text-muted-foreground font-medium">已禁用</div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/20">
            <div>
              <h4 className="font-medium">使用分析</h4>
              <p className="text-sm text-muted-foreground">帮助改进产品体验</p>
            </div>
            <div className="text-green-600 font-medium">已启用</div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">取消</Button>
        <Button>保存设置</Button>
      </div>

      {/* Layout Demo Info */}
      <Card className="bg-green-500/10 border-green-500/20">
        <CardContent className="p-4">
          <div className="text-sm text-green-600">
            <p className="font-medium mb-1">✅ Nested Layout 演示成功！</p>
            <p>这个页面使用了两层布局嵌套：</p>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• 外层布局：顶部导航和标题（来自 layout.tsx）</li>
              <li>• 内层布局：左侧设置菜单（来自 settings/layout.tsx）</li>
              <li>• 页面内容：当前的设置表单（来自 settings/page.tsx）</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 