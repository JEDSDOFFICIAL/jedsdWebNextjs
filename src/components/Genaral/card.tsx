import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface cardProps {
  imgUrl?: string;
  title: string;
  description?: string;
  route: string;
}

function Card({ imgUrl, title, description, route }: cardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:w-[10rem] w-[90vw] h-in ">
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={imgUrl} alt="" className="w-32 h-32 rounded-full" />
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg text-center">{description}</p>
        <Button variant="outline" size="lg">
          <Link href={route}> Learn More</Link>
        </Button>
      </div>
    </div>
  );
}

export default Card;
