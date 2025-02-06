

"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

const mockCustomers = [
  {
    id: "CUST-001",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "New York, USA",
    orders: 5,
    spent: 1499.99,
    joined: "2023-01-15",
    status: "active",
  },
  {
    id: "CUST-002",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    location: "London, UK",
    orders: 12,
    spent: 2999.99,
    joined: "2022-11-02",
    status: "active",
  },
  {
    id: "CUST-003",
    name: "Amber Brown",
    email: "amber@example.com",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    location: "New York, USA",
    orders: 13,
    spent: 3876.99,
    joined: "2023-03-02",
    status: "active",
  },
  {
    id: "CUST-004",
    name: "Smith Johnson",
    email: "smJonh@example.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    location: "Ontario, Canada",
    orders: 5,
    spent: 1876.99,
    joined: "2020-03-02",
    status: "active",
  },
];

export default function CustomersGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(mockCustomers.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = mockCustomers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6 p-4 ml-0 sm:ml-64 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-center sm:text-left">
          Customers ({mockCustomers.length})
        </h1>
        <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors w-full sm:w-auto">
          Export
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search customers..." className="pl-10 w-full" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentCustomers.map((customer) => (
          <Card key={customer.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="border-b p-4">
              <div className="flex items-center space-x-4">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden">
                  <Image src={customer.avatar} alt={customer.name} fill className="object-cover" />
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl font-semibold">{customer.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{customer.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <p className="text-sm break-all">{customer.email}</p>
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="text-muted-foreground">Total Orders</p>
                  <p className="font-semibold">{customer.orders}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Spent</p>
                  <p className="font-semibold">${customer.spent.toFixed(2)}</p>
                </div>
              </div>
              <Badge
                variant={
                  customer.status === "active" ? "default" :
                  customer.status === "new" ? "secondary" : "destructive"
                }
                className="w-full justify-center text-center py-1"
              >
                {customer.status.toUpperCase()}
              </Badge>
            </CardContent>
            <CardFooter className="border-t p-4 text-center text-xs text-muted-foreground">
              Joined: {customer.joined}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              isActive={currentPage > 1}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
              isActive={currentPage < totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
