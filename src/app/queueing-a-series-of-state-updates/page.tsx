import Coins from "./Coins";

export default function Page() {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold">
        Queueing a Series of State Updates
      </h1>
      <ol className=" list-inside list-decimal">
        <li>
          Setting a state variable will queue another render. But sometimes you
          might want to perform multiple operations on the value before queueing
          the next render. To do this, it helps to understand how React batches
          state updates.
        </li>
        <li>
          What to learn
          <ul className="ml-4 list-inside list-disc">
            <li>
              What "batching" is and how React uses it to process multiple state
              updates
            </li>
            <li>
              How to apply several updates to the same state variable in a row
            </li>
          </ul>
        </li>
        <li>
          Remember that <strong>each render's state values are fixed</strong>,
          so the value inside the first render is always the same.
        </li>
        <li>
          But there is one other factor at play here.{" "}
          <strong>
            React waits until <i>all</i> code in the event handlers has run
            before processing the state updates.
          </strong>{" "}
          This is why the re-render only happens after all{" "}
          <code>setSomeState()</code> calls.
        </li>
        <li>
          This is just like a waiter taking an order at the restaurant. A waiter
          doesn't run to the kitchen at the mention of first dish! Instead, they
          let you finish your order, let you make changes to it, and even take
          orders from other people at the table.
        </li>
        <li>
          The behaviour also known as <strong>batching</strong>
        </li>
        <li>
          <strong>
            React does not batch across <i>multiple</i> intentional events like
            clicks
          </strong>
          --each click is handled separately.
        </li>
        <li>React only does batching when it's generally safe to do.</li>
        <li>
          Batching example
          <div className="p-4 border ml-4 mt-1">
            <Coins />
            <hr className="mt-2" />
            <p className="mt-2">
              All of the state updates for each event handler are batched and
              then only trigger single re-render.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}
