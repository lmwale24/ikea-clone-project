import { useRef } from "react";

interface CarouselProps {
  items: JSX.Element[];
}
export const Carousel = ({ items }: CarouselProps) => {
  const el = useRef<HTMLDivElement | null>(null);

  const scroll = (scrollOffset: number) => {
    if (el.current) el.current.scrollTo({
      left: el.current.scrollLeft + scrollOffset,
      behavior: "smooth",
    })
  };
  return (
    <div className="relative">
      <div className="absolute z-10 left-0 top-0 w-full h-full justify-between items-center inline-flex p-5 hover:opacity-100 opacity-0">
        <div
          className="cursor-pointer rounded-full bg-black text-white w-10 h-10 inline-flex justify-center items-center font-bold"
          onClick={() => scroll(-100)}
        >
          {"<"}
        </div>
        <div className="flex-1"></div>
        <div
          className="cursor-pointer rounded-full bg-black text-white w-10 h-10 inline-flex justify-center items-center font-bold"
          onClick={() => scroll(100)}
        >
          {">"}
        </div>
      </div>
      <div
        className="relative flex gap-2 overflow-x-auto scroll-smooth"
        ref={el}
      >
        {items.map((item) => (
          <>{item}</>
        ))}
      </div>
    </div>
  );
};
