import { Carousel } from "./components/Carousel";

export default function App() {
  return (
    <div className="w-screen flex flex-col">
      <div className="w-full h-10 flex gap-20 justify-center items-center bg-black text-white text-xs font-medium">
        <div className="hover:underline hover:underline-offset-1 hover:cursor-pointer">
          Free planning appointments
        </div>
        <div className="hover:underline hover:underline-offset-1 hover:cursor-pointer">
          Assembly via Taskrabbit
        </div>
        <div className="hover:underline hover:underline-offset-1 hover:cursor-pointer">
          Free delivery on delivery over £60
        </div>
      </div>

      <div className="flex flex-1 bg-white">
        <div className="w-20 h-full bg-white">Sidebar</div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-5 p-5 h-[72px] bg-white cursor-pointer">
            <img src="https://picsum.photos/100/40" alt="logo"></img>
            <input
              type="search"
              className="flex-1 bg-gray-100 rounded-full p-5 placeholder:text-gray-600 h-12 "
              placeholder="What are you looking for?"
            />
            <div className="rounded-full cursor-pointer hover:bg-gray-100 py-2 px-3">
              Hej! Login or signup
            </div>
            <div className="cursor-pointer">Heart</div>
            <div className="cursor-pointer">Basket</div>
          </div>
          <div className="flex flex-col gap-10 p-5">
            <div className="flex flex-col">
              <div className="font-bold text-lg flex-1">
                Your favourites for less
              </div>
              <div className="flex items-center">
                <div className="w-2/3">
                  From clever storage to furniture favourites, we’ve lowered the
                  prices on thousands of our most popular products – without
                  cutting corners on quality. The best part? These price tags
                  are here to stay.
                </div>
                <div className="flex-1"></div>
                <div className="rounded-full bg-transparent outline text-xs font-bold text-center text-nowrap px-5 py-2">
                  Shop New lower prices
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-around">
              <img alt="img" src="https://picsum.photos/900/900" width={500} />
              <img alt="img" src="https://picsum.photos/900/900" width={500} />
            </div>
            <div>
              <div className="text-lg font-bold">
                Top families at New lower prices
              </div>
              <Carousel
                items={new Array(10).fill(
                  <img
                    alt="img"
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
                    alt="img"
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
                    alt="img"
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
    </div>
  );
}
