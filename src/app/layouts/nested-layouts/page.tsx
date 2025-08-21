import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NestedLayoutsPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-primary">
            🏠 欢迎来到 Nested Layouts 首页
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            这是嵌套布局的首页。点击上方的导航标签页来体验真正的 Nested Layouts 特性。
          </p>
          <p className="text-sm text-muted-foreground">
            注意：当你在不同页面之间切换时，外层布局（导航栏、标题等）会保持不变，
            只有内容区域会更新。这就是 Nested Layouts 的核心优势。
          </p>
        </CardContent>
      </Card>

      {/* Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/80 border-border/30">
          <CardHeader>
            <CardTitle className="text-lg">布局持久化</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              外层布局在页面切换时保持状态，避免重新渲染，提升用户体验。
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/30">
          <CardHeader>
            <CardTitle className="text-lg">共享组件</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              导航栏、侧边栏等公共组件可以在多个页面间共享，代码更加简洁。
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/30">
          <CardHeader>
            <CardTitle className="text-lg">多层嵌套</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              支持多层布局嵌套，每一层都可以有自己的布局逻辑和状态管理。
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/30">
          <CardHeader>
            <CardTitle className="text-lg">性能优化</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              只有变化的部分会重新渲染，大大提升应用性能和响应速度。
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Page Info */}
      <Card className="bg-muted/30 border-border/20">
        <CardHeader>
          <CardTitle>当前页面信息</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">文件路径</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                app/layouts/nested-layouts/page.tsx
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">应用的布局</h4>
              <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                app/layouts/nested-layouts/layout.tsx
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 