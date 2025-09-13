import { CounterStoreProvider } from "@/stores/counter";
import { CounterView } from "@/components/Counter";

const MainPage = () => {
  return (
    <main>
      <h1 className="text-center text-2xl font-bold">
        One Page App
      </h1>
      <div>
        <CounterStoreProvider>
          <CounterView />
        </CounterStoreProvider>
      </div>
    </main>
  );
};

export default MainPage;
