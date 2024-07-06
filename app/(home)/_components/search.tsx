"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className=" flex items-center gap-4">
      <div className="flex gap-2">
        <Input placeholder="Material" />
        <Input placeholder="Lote" />
      </div>
      <Button variant="default" size="icon">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
