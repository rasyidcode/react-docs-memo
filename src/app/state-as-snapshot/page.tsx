import { Metadata } from "next";
import Form from "./form";

export const metadata: Metadata = {
  title: "State as Snapshot",
};

export default function Page() {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold">State as Snapshot</h1>
      <ol className="list-inside list-decimal">
        <li>
          When press "send", <code>setIsSent(true)</code> tells React to
          re-render the UI
          <div>
            <Form />
          </div>
        </li>
      </ol>
    </div>
  );
}
