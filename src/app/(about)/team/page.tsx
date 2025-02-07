import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";

function EditorialTeam() {
 
  return (
    <div className="w-screen h-screen  bg-[url('/jedsdlogo.png')] bg-contain bg-no-repeat bg-center">
      <div className="w-full h-full bg-slate-400/50 absolute top-0 left-0 pt-24">
      
      <div className="w-full text-3xl md:text-5xl text-center font-bold ">
        Meet our Team
      </div>
      <div className=" flex justify-center items-center h-[30rem] bg-green-300">



  

    <Carousel
     
      className="w-full max-w-xs"
     
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
 

        </div></div>
    </div>
  );
}

export default EditorialTeam;
