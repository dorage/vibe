import { Button } from "@/components/Button";
import { useCounterStore } from "@/hooks/useCounterStore";

export const CounterView = () => {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <>
      <div>{count}</div>
      <div>
        <Button onClick={increase}>Increase</Button>
        <Button onClick={decrease}>Decrease</Button>
      </div>
    </>
  );
};
