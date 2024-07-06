import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const Header = () => {
  return (
    <Card>
      <CardContent className=" p-5 flex justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="CRONIMET" height={22} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className=" p-0 border-0">
            <SheetHeader className=" text-left border-b border-solid p-5">
              <SheetTitle className=" text-gray-400">MENU</SheetTitle>
            </SheetHeader>

            <div
              className=" p-5 flex flex-col gap-4
            "
            >
              <h2 className=" font-bold text-xl text-gray-400 m-2">Estoque</h2>
              <Button asChild variant="secondary" className=" p-3 w-full">
                <Link href="#">SALDO</Link>
              </Button>
              <Button asChild variant="secondary" className=" p-3 w-full">
                <Link href="#">ENTRADAS</Link>
              </Button>
              <Button asChild variant="secondary" className=" p-3 w-full">
                <Link href="#">SAÍDAS</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
