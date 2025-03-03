import { Metadata } from "next";
import Form from "./Form";
import AddToCart from "./AddToCart";
import CakeCounter from "./CakeCounter";
import Wallet from "./Wallet";
import Chat from "./Chat";

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
            <hr className="mt-2" />
            <p className="mt-5 text-sm">
              In above example, even though we call{" "}
              <code>setCakeCount(cakeCount + 1)</code> three times in the event
              handler, it will only increase one for each click, since the{" "}
              <code>cakeCount</code> state is still same since the first render.
            </p>
          </div>
        </li>
        <li>
          State over time
          <div className="p-4 border ml-4 mt-1">
            <Wallet />
            <hr className="mt-2" />
            <p>
              In this case alert will show <code>0</code> when clicking the
              button, since the value still the same on the "snapshot". Even we
              put timer, the value will still be the previous state.
            </p>
          </div>
        </li>
        <li>
          The state stored in React may have changed by the time the alert runs,
          but it was scheduled using a snapshot of the state at the time the
          user interacted with it!
        </li>
        <li>
          A state variable's value never changes within a render, even if its
          event handler's code is asynchonous. The value is fixed inside that
          event handler.
        </li>
        <li>
          The value was "fixed" when React "took the snapshot" of the UI by
          calling your component.
        </li>
        <li>
          Testing with timer
          <div className="p-4 border ml-4 mt-1">
            <Chat />
            <hr className="mt-2" />
            <p>
              <strong>
                React keeps the state values "fixed" within one render's event
                handlers.
              </strong>{" "}
              You don't need to worry whether the state has changed while the
              code is running.
            </p>
          </div>
        </li>
        <li>
          We use <strong>state updater function</strong> to read the latest
          state before a re-render.
        </li>
      </ol>
      <h1>Recap</h1>
      <ul className="list-inside list-disc ml-4">
        <li>Setting state requests a new render.</li>
        <li>React stores state outside of the component, as if on a shelf.</li>
        <li>
          When calling <code>useState</code>, React gives a snapshot of the
          state for <i>that render</i>.
        </li>
        <li>
          Variables and event handlers don't "survive" re-renders. Every render
          has its own event handler.
        </li>
        <li>
          You can mentally subtitude state in event handlers, similarly to how
          you think about rendered JSX.{" "}
        </li>
        <li>
          Event handlers create in the past have the state values from the
          render in which they were created.
        </li>
      </ul>
    </div>
  );
}
