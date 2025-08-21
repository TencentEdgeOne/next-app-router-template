"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NestedLayoutDemo() {
  const [activeTab, setActiveTab] = useState("home");
  const [counter, setCounter] = useState(0);

  const tabs = [
    { id: "home", label: "Home", content: "这是 Nested Layouts 首页" },
    { id: "tab1", label: "Tab1", content: "这是 Tab1 页面内容" },
    { id: "tab2", label: "Tab2", content: "这是 Tab2 页面内容" },
    { id: "tab3", label: "Tab3", content: "这是 Tab3 页面内容" },
  ];

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <Card className="bg-muted/30 border-border/20">
      <CardContent className="p-0">
        {/* Tabs */}
        <div className="flex border-b border-border/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-background text-foreground border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-8 relative">
          {/* Counter Button - Top Right */}
          <div className="absolute top-4 right-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleIncrement}
              className="border-primary/20 text-primary hover:bg-primary/10"
            >
              Click {counter}
            </Button>
          </div>

          {/* Tab Content */}
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              {tabs.find(tab => tab.id === activeTab)?.content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 