import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Circle, MessageSquare, Video, Phone } from "lucide-react";

export default function UsersSlot() {
  const users = [
    {
      id: 1,
      name: "张三",
      avatar: "ZS",
      status: "在线",
      department: "技术部",
      lastSeen: "刚刚"
    },
    {
      id: 2,
      name: "李四",
      avatar: "LS",
      status: "在线",
      department: "产品部",
      lastSeen: "2分钟前"
    },
    {
      id: 3,
      name: "王五",
      avatar: "WW",
      status: "离线",
      department: "设计部",
      lastSeen: "1小时前"
    },
    {
      id: 4,
      name: "赵六",
      avatar: "ZL",
      status: "在线",
      department: "运营部",
      lastSeen: "5分钟前"
    }
  ];

  const onlineUsers = users.filter(user => user.status === "在线");

  return (
    <div className="h-full flex flex-col">
      <CardHeader className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-green-500" />
            <CardTitle className="text-lg">用户列表</CardTitle>
          </div>
          <div className="text-sm text-muted-foreground">
            {onlineUsers.length} 人在线
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/20 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary text-sm">
                {user.avatar}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-sm">{user.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Circle className={`w-2 h-2 ${
                      user.status === "在线" ? "text-green-500 fill-current" : "text-gray-400"
                    }`} />
                    <span className="text-xs text-muted-foreground">{user.status}</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {user.department} • {user.lastSeen}
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                <Video className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted/50 rounded transition-colors">
                <Phone className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  );
} 