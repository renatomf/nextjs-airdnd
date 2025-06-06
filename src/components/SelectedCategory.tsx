"use client";

import Image from "next/image";
import { useState } from "react";
import { categoryItems } from "@/lib/categoryItems";
import { Card, CardHeader } from "./ui/card";

export function SelectedCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div className="grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36">
      <input 
        type="hidden" 
        name="categoryName" 
        value={selectedCategory || ""}
        onChange={() => {}}
      />
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={selectedCategory === item.name ? "border-primary" : ""}
            onClick={() => setSelectedCategory(item.name)}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              
              <h3 className="font-medium">
                {item.name}
              </h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  )
}
