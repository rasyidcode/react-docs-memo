import Coins from "./Coins";
import CryptoCounter from "./CryptoCounter";
import LikeButton from "./LikeButton";
import ReactStateQueue from "./ReactStateQueue";
import RequestTracker from "./RequestTracker";

export default function Page() {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold">
        Queueing a Series of State Updates
      </h1>
      <div>
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
      </div>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">React batches state updates</h2>
        <ol className=" list-inside list-decimal">
          <li>
            Setting a state variable will queue another render. But sometimes
            you might want to perform multiple operations on the value before
            queueing the next render. To do this, it helps to understand how
            React batches state updates.
          </li>
          <li></li>
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
            This is just like a waiter taking an order at the restaurant. A
            waiter doesn't run to the kitchen at the mention of first dish!
            Instead, they let you finish your order, let you make changes to it,
            and even take orders from other people at the table.
          </li>
          <li>
            The behaviour also known as <strong>batching</strong>
          </li>
          <li>
            <strong>
              React does not batch across <i>multiple</i> intentional events
              like clicks
            </strong>
            --each click is handled separately.
          </li>
          <li>React only does batching when it's generally safe to do.</li>
          <li>
            Batching example
            <div className="p-4 border ml-4 mt-1">
              <Coins />
              <hr className="mt-2" />
              <p className="mt-2 text-sm">
                All of the state updates for each event handler are batched and
                then only trigger single re-render.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">
          Updating the same state multiple times before the next render
        </h2>
        <ol className="list-inside list-decimal">
          <li>
            You can update the same state variable multiple times in a row
            before the next render.
          </li>
          <li>React will batch all the updates and only re-render once.</li>
          <li>
            This is useful when you want to perform several operations on a
            state variable.
          </li>
          <li>
            <strong>Example:</strong> You want to increment a counter by 1 every
            second for 5 seconds.
          </li>
          <li>
            <strong>Example:</strong> You want to add multiple items to a list
            and then re-render.
          </li>
          <li>
            <strong>Example:</strong> You want to update a state variable based
            on the previous value.
          </li>
          <li>
            <strong>Example:</strong> You want to perform several operations on
            a state variable before re-rendering.
          </li>
          <li>
            It is uncommon use case, but if you like to update the same state
            variable multiple times before the next render.
          </li>
          <li>
            Example: Crypto Counter
            <div className="p-4 border ml-4 mt-1">
              <CryptoCounter />
              <hr className="mt-2" />
              <p className="mt-2 text-sm"></p>
            </div>
          </li>
          <li>
            <code>setCount((n) ={">"} n + 1)</code> is called an{" "}
            <strong>updater function</strong>
          </li>
          <li>
            Updater function run during rendering, so{" "}
            <strong>
              updater functions must be pure and only <i>return</i> the result.
            </strong>
          </li>
          <li>
            Don't try to set state from inside of them or run other side
            effects.
          </li>
          <li>
            It's common to name the updater function argument by the first
            letters of the corresponding state variable:
            <div className="p-4 border ml-4 mt-1">
              <code>
                setEnabled(e ={">"} !e)
                <br />
                setLastName(ln ={">"} ln.reverse())
                <br />
                setFriendCount(fc ={">"} fc * 2)
              </code>
            </div>
          </li>
          <li>
            Example: A Like Button Counter
            <div className="p-4 border ml-4 mt-1">
              <LikeButton />
            </div>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Recap</h2>
        <ul className="list-inside list-disc">
          <li>
            Setting state does not change the variable in the existing render,
            but it requests a new render.
          </li>
          <li>
            React processes state updates after event handlers have finished
            running. This is called batching.
          </li>
          <li>
            To update some state multiple times in one event, you can use{" "}
            <code>setNumber(n ={">"} n + 1)</code> updater function.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Challenges</h2>
        <ol className="list-inside list-decimal">
          <li>
            Fix a request counter
            <div className="p-4 border ml-4 mt-1">
              <RequestTracker />
              <hr className="mt-2" />
              <p className="mt-2 text-sm">
                Inside the <code>handleBuy</code> event handler, the values of{" "}
                <code>pending</code> and <code>completed</code> to what they
                were at the time of the click event. For the first render,{" "}
                <code>pending</code> was <code>0</code>, so{" "}
                <code>setPending(pending - 1)</code> becomes{" "}
                <code>setPending(-1)</code>, which is wrong. Since we want to{" "}
                <i>increment</i> or <i>decrement</i> the counters, rather than
                set them to a concrete value determined during the click, we can
                instead pass the updater functions.
              </p>
            </div>
          </li>
          <li>
            Implement the state queue yourself
            <div className="p-4 border ml-4 mt-1">
              <ReactStateQueue />
              <hr className="mt-2" />
              <p className="mt-2 text-sm"></p>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}
