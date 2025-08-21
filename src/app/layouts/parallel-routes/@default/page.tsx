import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, ArrowRight } from "lucide-react";

export default function DefaultSlot() {
  return (
    <div className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-2">
          <Info className="w-5 h-5 text-muted-foreground" />
          <CardTitle className="text-lg">欢迎使用</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto">
            <Info className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">选择左侧插槽开始使用</h3>
            <p className="text-sm text-muted-foreground">
              这是一个 Parallel Routes 演示页面，展示了多个插槽同时渲染的效果。
              <br />
              点击左侧的插槽卡片来查看不同的内容。
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Messages</span>
            <ArrowRight className="w-4 h-4" />
            <span>Users</span>
            <ArrowRight className="w-4 h-4" />
            <span>Settings</span>
          </div>
        </div>
      </CardContent>
    </div>
  );
} 