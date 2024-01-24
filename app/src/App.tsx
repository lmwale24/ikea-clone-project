import { Carousel } from "./components/Carousel";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-1 bg-orange-500">
      <div className="w-20 h-full bg-white">Sidebar</div>
      <div className="flex flex-col flex-1">
        <div className="h-[72px] bg-white">Header</div>
        <div className="p-5">
          <div className="flex flex-col">
            <div className="font-bold text-lg flex-1">
              Your favourites for less
            </div>
            <div className="flex items-center">
              <div>
                From clever storage to furniture favourites, we’ve lowered the
                prices on thousands of our most popular products – without
                cutting corners on quality. The best part? These price tags are
                here to stay.
              </div>
              <div className="rounded-full bg-transparent outline text-xs font-bold text-center text-nowrap px-5 py-2">
                Shop New lower prices
              </div>
            </div>
          </div>
          <div className="flex gap-1 justify-around">
            <img src="https://picsum.photos/900/900" width={500} />
            <img src="https://picsum.photos/900/900" width={500} />
          </div>
          <div>
            <div className="text-lg font-bold">
              Top families at New lower prices
            </div>
            <Carousel
              items={new Array(10).fill(
                <img
                  src="https://picsum.photos/300/500"
                  width={200}
                  height={300}
                />
              )}
            />
          </div>
          <div>
            <div className="text-lg font-bold">Top category picks</div>
            <Carousel
              items={new Array(10).fill(
                <img
                  src="https://picsum.photos/300/500"
                  width={200}
                  height={300}
                />
              )}
            />
          </div>
          <div>
            <div className="text-lg font-bold">Right now at IKEA</div>
            <Carousel
              items={new Array(10).fill(
                <img
                  src="https://picsum.photos/300/500"
                  width={200}
                  height={300}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
