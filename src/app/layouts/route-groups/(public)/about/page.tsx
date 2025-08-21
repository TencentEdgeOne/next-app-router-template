import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Users, Target, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      title: "创新技术",
      description: "采用最新的 Next.js 和现代前端技术栈",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "用户体验",
      description: "专注于提供卓越的用户体验和界面设计",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "团队协作",
      description: "拥有专业的开发团队和完善的协作流程",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "全球服务",
      description: "面向全球用户提供稳定可靠的服务",
      icon: Globe,
      color: "text-purple-600"
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
            关于我们
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            这个页面位于 <code className="bg-muted px-2 py-1 rounded text-primary">(public)</code> Route Group 中，
            路径为 <code className="bg-muted px-2 py-1 rounded text-primary">/layouts/route-groups/about</code>
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company Introduction */}
          <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">我们的使命</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                致力于通过创新的技术解决方案，为用户提供卓越的数字体验。
                我们专注于 Next.js 应用开发，追求代码质量和用户体验的完美平衡。
              </p>
              <p className="text-muted-foreground">
                我们相信技术的力量能够改变世界，让每个人都能享受到科技带来的便利。
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/80 border-border/30 hover:bg-card/90 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>联系我们</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">邮箱</p>
                    <p className="text-sm text-muted-foreground">contact@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">电话</p>
                    <p className="text-sm text-muted-foreground">+86 400-123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">地址</p>
                    <p className="text-sm text-muted-foreground">北京市朝阳区科技园</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Route Group Explanation */}
          <Card className="bg-muted/30 border-border/20">
            <CardHeader>
              <CardTitle>Route Group 公共页面特性</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">当前路径结构</h4>
                  <div className="bg-background/50 p-3 rounded border font-mono text-xs">
                    <div>文件路径: app/layouts/route-groups/(public)/about/page.tsx</div>
                    <div>URL路径: /layouts/route-groups/about</div>
                    <div>Route Group: (public)</div>
                    <div>特性: 公共访问页面</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">公共页面特点</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 位于 (public) route group 中</li>
                    <li>• 无需特殊权限即可访问</li>
                    <li>• 适合放置公司信息、帮助文档等</li>
                    <li>• 可以设置专门的SEO优化</li>
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