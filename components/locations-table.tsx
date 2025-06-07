"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  ChevronRight, 
  FileText, 
  Search, 
  Filter, 
  Columns3,
  ArrowUpDown 
} from "lucide-react";

// Sample data structure matching the Figma design
const data = [
  {
    id: "1",
    location: "Staysure",
    address: "Northampton, NN4 7XD",
    isFavorite: false,
    rankingsDown: "Create report",
    totalReviews: null,
    header3: "Create report",
    header4: "Create report",
    header5: "Create report",
    header6: "Create report",
  },
  {
    id: "2",
    location: "Villaggio Italiano",
    address: "Hartsdale, 10530",
    isFavorite: true,
    rankingsDown: "Create report",
    totalReviews: null,
    header3: "Create report",
    header4: "Create report",
    header5: "Create report",
    header6: "Create report",
  },
  {
    id: "3",
    location: "Staysure",
    address: "Northampton, NN4 7XD",
    isFavorite: false,
    rankingsDown: "Create report",
    totalReviews: null,
    header3: "Create report",
    header4: "Create report",
    header5: "Create report",
    header6: "Create report",
  },
  {
    id: "4",
    location: "Villaggio Italiano",
    address: "Hartsdale, 10530",
    isFavorite: true,
    rankingsDown: "Create report",
    totalReviews: null,
    header3: "Create report",
    header4: "Create report",
    header5: "Create report",
    header6: "Create report",
  },
  {
    id: "5",
    location: "Villaggio Italiano",
    address: "Hartsdale, 10530",
    isFavorite: true,
    rankingsDown: "Create report",
    totalReviews: null,
    header3: "Create report",
    header4: "Create report",
    header5: "Create report",
    header6: "Create report",
  },
  {
    id: "6",
    location: "Villaggio Italiano",
    address: "Hartsdale, 10530",
    isFavorite: true,
    rankingsDown: "Create report",
    totalReviews: null,
    header3: "Create report",
    header4: "Create report",
    header5: "Create report",
    header6: "Create report",
  },
  {
    id: "7",
    location: "Villaggio Italiano",
    address: "Hartsdale, 10530",
    isFavorite: true,
    rankingsDown: "Create report",
    totalReviews: null,
    header3: "Create report",
    header4: "Create report",
    header5: "Create report",
    header6: "Create report",
  },
  {
    id: "8",
    location: "Villaggio Italiano",
    address: "Hartsdale, 10530",
    isFavorite: true,
    rankingsDown: "Create report",
    totalReviews: null,
    header3: "Create report",
    header4: "Create report",
    header5: "Create report",
    header6: "Create report",
  },
  {
    id: "9",
    location: "Villaggio Italiano",
    address: "Hartsdale, 10530",
    isFavorite: true,
    rankingsDown: "Create report",
    totalReviews: null,
    header3: "Create report",
    header4: "Create report",
    header5: "Create report",
    header6: "Create report",
  },
];

export function LocationsTable() {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedRows((prev) =>
      prev.length === data.length ? [] : data.map((item) => item.id)
    );
  };

  return (
    <div>
      {/* Top toolbar matching Figma */}
      <div className="flex items-center gap-2 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-10 w-64"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Columns3 className="h-4 w-4" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox
                checked={selectedRows.length === data.length}
                onCheckedChange={toggleAll}
              />
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4" />
                Location
              </div>
            </TableHead>
            <TableHead>
              <Button variant="ghost" className="h-auto p-0 font-medium">
                <ArrowUpDown className="h-4 w-4 mr-1" />
                Rankings down
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" className="h-auto p-0 font-medium">
                <ArrowUpDown className="h-4 w-4 mr-1" />
                Total Reviews
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" className="h-auto p-0 font-medium">
                <ArrowUpDown className="h-4 w-4 mr-1" />
                Header name
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" className="h-auto p-0 font-medium">
                <ArrowUpDown className="h-4 w-4 mr-1" />
                Header name
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" className="h-auto p-0 font-medium">
                <ArrowUpDown className="h-4 w-4 mr-1" />
                Header name
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" className="h-auto p-0 font-medium">
                <ArrowUpDown className="h-4 w-4 mr-1" />
                Header name
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              data-state={selectedRows.includes(row.id) ? "selected" : undefined}
            >
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onCheckedChange={() => toggleRow(row.id)}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {row.isFavorite && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                  <ChevronRight className="h-4 w-4" />
                  <div>
                    <div className="font-medium">{row.location}</div>
                    <div className="text-sm text-muted-foreground">{row.address}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="link" className="h-auto p-0">
                  {row.rankingsDown}
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <Button variant="link" className="h-auto p-0">
                    Create report
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="link" className="h-auto p-0">
                  {row.header3}
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="link" className="h-auto p-0">
                  {row.header4}
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="link" className="h-auto p-0">
                  {row.header5}
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="link" className="h-auto p-0">
                  {row.header6}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Proper pagination matching Figma */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>1-50 of 340</span>
          <Select defaultValue="50">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span>per page</span>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}