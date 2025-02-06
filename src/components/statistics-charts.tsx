// src\components\statistics-charts.tsx

"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ShoppingCart,
  DollarSign,
  Users,
  Package,
  Download,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const monthlyRevenue = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 6000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 7000 },
  { month: "Jun", revenue: 8000 },
];

export default function StatisticsCharts() {
  return (
    <div className="space-y-8 p-4 ml-0 sm:ml-64 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm sm:text-base">
            Your business at a glance
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[140px] sm:w-[180px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="hidden sm:flex">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Revenue", value: "$45,230", color: "green", icon: DollarSign },
          { title: "Total Orders", value: "2,345", color: "blue", icon: ShoppingCart },
          { title: "Avg. Order Value", value: "$235.12", color: "purple", icon: Package },
          { title: "New Customers", value: "1,234", color: "pink", icon: Users },
        ].map((item, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>
                  <p className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {item.value}
                  </p>
                </div>
                <div className={`p-2 sm:p-3 bg-${item.color}-100 rounded-full`}>
                  <item.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${item.color}-600`} />
                </div>
              </div>
              <div className={`mt-2 sm:mt-4 flex items-center text-xs sm:text-sm font-medium text-${item.color}-600`}>
                <ArrowUpRight className="h-4 w-4 mr-1" /> 10% increase
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Revenue Overview
            </CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Monthly revenue trend
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="chart">Chart</TabsTrigger>
                <TabsTrigger value="table">Table</TabsTrigger>
              </TabsList>
              <TabsContent value="chart">
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={monthlyRevenue}>
                    <XAxis dataKey="month" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#8884d8"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
