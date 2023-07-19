import { render, createContext, FunctionalComponent } from "preact";
import { useContext } from "preact/hooks";

const SomeContext = createContext<string>(undefined);

const App: FunctionalComponent<{}> = () => {
  const contextValue = useContext(SomeContext);
  return <h1>{contextValue}</h1>;
};

render(
  <SomeContext.Provider value={"Hello"}>
    <App />
  </SomeContext.Provider>,
  document.body
);
