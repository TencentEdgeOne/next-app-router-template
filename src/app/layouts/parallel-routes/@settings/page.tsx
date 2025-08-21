import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Bell, Shield, Palette, Globe, Moon } from "lucide-react";

export default function SettingsSlot() {
  const settingCategories = [
    {
      id: "general",
      name: "常规设置",
      icon: Settings,
      color: "text-blue-500",
      settings: [
        { name: "语言", value: "中文", description: "应用界面语言" },
        { name: "时区", value: "UTC+8", description: "系统时区设置" },
        { name: "主题", value: "深色", description: "界面主题模式" }
      ]
    },
    {
      id: "notifications",
      name: "通知设置",
      icon: Bell,
      color: "text-green-500",
      settings: [
        { name: "邮件通知", value: "开启", description: "接收邮件通知" },
        { name: "推送通知", value: "开启", description: "接收推送通知" },
        { name: "声音提醒", value: "关闭", description: "通知声音提醒" }
      ]
    },
    {
      id: "security",
      name: "安全设置",
      icon: Shield,
      color: "text-red-500",
      settings: [
        { name: "两步验证", value: "开启", description: "账户安全验证" },
        { name: "登录提醒", value: "开启", description: "异常登录提醒" },
        { name: "密码强度", value: "强", description: "密码安全等级" }
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-purple-500" />
          <CardTitle className="text-lg">应用设置</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-4">
        {settingCategories.map((category) => (
          <div key={category.id} className="space-y-3">
            <div className="flex items-center space-x-2">
              <category.icon className={`w-4 h-4 ${category.color}`} />
              <h3 className="font-medium text-sm">{category.name}</h3>
            </div>
            <div className="space-y-2">
              {category.settings.map((setting, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/20"
                >
                  <div className="flex-1">
                    <div className="font-medium text-sm">{setting.name}</div>
                    <div className="text-xs text-muted-foreground">{setting.description}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{setting.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border/20">
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-2">
              <Moon className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium">深色模式</span>
            </div>
            <div className="w-10 h-6 bg-primary rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 transition-transform"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
} 