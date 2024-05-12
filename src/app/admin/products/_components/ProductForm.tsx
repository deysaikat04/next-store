"use client";

import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/formatter";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

function ProductForm() {
  const [priceInCents, setPriceInCents] = useState<number>();
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Price In Cents</Label>
        <Input
          type="number"
          id="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
