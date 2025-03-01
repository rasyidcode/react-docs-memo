import { Metadata } from "next";
import Form from "./Form";
import AddToCart from "./AddToCart";
import CakeCounter from "./CakeCounter";

export const metadata: Metadata = {
  title: "State as Snapshot",
};

export default function Page() {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold">State as Snapshot</h1>
      <ol className="list-inside list-decimal">
        <li>
          Re-render the UI after setting <code>setIsSent(true)</code>.
          <div className="p-4">
            <Form />
          </div>
        </li>
        <li>
          When React re-renders a component:
          <ol className="list-inside list-disc ml-4">
            <li>React calls your function again.</li>
            <li>Your function returns a new JSX snapshot.</li>
            <li>
              React then updates the screen to match the snapshot your function
              returned.
            </li>
          </ol>
        </li>
        <li>State is a component memory.</li>
        <li>
          State is not like a regular variable that disappears after function
          executed.
        </li>
        <li>State actually "lives" in React itself--as if on a shelf!</li>
        <li>Rendering takes a snapshot in time</li>
        <li>
          Testing setting state re-render UI
          <div className="p-4 border ml-4 mt-1">
            <AddToCart />
          </div>
        </li>
        <li>
          Cake counter
          <div className="p-4 border ml-4 mt-1">
            <CakeCounter />
            <hr />
            <p className="mt-5 text-sm">
              In above example, even though we call{" "}
              <code>setCakeCount(cakeCount + 1)</code> three times in the event
              handler, it will only increase one for each click, since the{" "}
              <code>cakeCount</code> state is still same since the first render.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}
