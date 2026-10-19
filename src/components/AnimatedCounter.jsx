import { counterItems } from "../Constants";
import CountUpModule from "react-countup";

const CountUp = CountUpModule.default ?? CountUpModule;

const AnimatedCounter = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
      {counterItems.map((item) => (
        <div key={item.label} className="bg-zinc-900 rounded-lg p-10">
          <div className="text-white text-5xl font-bold mb-2">
            <CountUp
              start={0}
              end={Number(item.value)}
              suffix={item.suffix }
            />
          </div>

          <div className="text-white/50 text-lg">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCounter;
