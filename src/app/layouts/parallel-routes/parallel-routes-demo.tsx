"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Settings, FileText } from "lucide-react";

export default function ParallelRoutesDemo() {
  const [activeSlot, setActiveSlot] = useState("messages");

  const slots = [
    {
      id: "messages",
      name: "Messages Slot",
      icon: MessageSquare,
      description: "消息列表和对话",
      color: "border-blue-500/30 bg-blue-500/10",
      content: "收件箱内容 - 显示用户的消息列表"
    },
    {
      id: "users",
      name: "Users Slot",
      icon: Users,
      description: "用户管理和列表",
      color: "border-green-500/30 bg-green-500/10",
      content: "用户列表 - 显示在线用户和联系人"
    },
    {
      id: "settings",
      name: "Settings Slot",
      icon: Settings,
      description: "应用设置和配置",
      color: "border-purple-500/30 bg-purple-500/10",
      content: "设置面板 - 显示应用配置选项"
    }
  ];

  const currentSlot = slots.find(slot => slot.id === activeSlot);

  return (
    <div className="space-y-8">
      {/* Parallel Routes Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slots.map((slot) => (
          <Card 
            key={slot.id}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              activeSlot === slot.id 
                ? "ring-2 ring-primary shadow-lg" 
                : "hover:shadow-md"
            }`}
            onClick={() => setActiveSlot(slot.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${slot.color}`}>
                  <slot.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <CardTitle className="text-lg">{slot.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{slot.description}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Selected Slot Details */}
      {currentSlot && (
        <Card className="bg-muted/30 border-border/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${currentSlot.color}`}>
                <currentSlot.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl">{currentSlot.name}</CardTitle>
                <p className="text-muted-foreground">{currentSlot.description}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>文件夹结构: @{currentSlot.id}/</span>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg border border-border/20">
                <div className="text-sm text-muted-foreground mb-2">插槽内容预览:</div>
                <div className="font-medium">{currentSlot.content}</div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <h4 className="font-medium text-primary mb-2">关键特性</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 使用 @folder 约定创建插槽</li>
                  <li>• 多个插槽可以同时渲染</li>
                  <li>• 每个插槽独立导航，不影响其他插槽</li>
                  <li>• 支持条件渲染和默认插槽</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-muted/50 border border-border/20 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">实际应用场景</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Parallel Routes 特别适用于需要同时显示多个独立内容的场景：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    <span>邮件应用（收件箱 + 联系人）</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>社交应用（动态 + 好友列表）</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Settings className="w-4 h-4 text-purple-500" />
                    <span>管理后台（内容 + 侧边栏）</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <FileText className="w-4 h-4 text-orange-500" />
                    <span>文档应用（目录 + 内容）</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-muted/50 border border-border/20 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">文件结构示例</h4>
                <div className="bg-background/50 p-3 rounded-lg border border-border/20">
                  <div className="text-sm font-mono text-muted-foreground">
                    app/
                    <br />
                    ├── @messages/
                    <br />
                    │   └── page.tsx
                    <br />
                    ├── @users/
                    <br />
                    │   └── page.tsx
                    <br />
                    ├── @settings/
                    <br />
                    │   └── page.tsx
                    <br />
                    └── layout.tsx
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  每个 @folder 都是一个插槽，可以在 layout.tsx 中同时渲染
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 