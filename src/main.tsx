import { createRoot } from "react-dom/client";
import type { ReactElement } from "react";
import { Puck, type Config, type Data } from "@puckeditor/core";
import "@puckeditor/core/puck.css";

const config: Config = {
  components: {
    InputBlock: {
      render: (): ReactElement => (
        <label style={{ display: "block", padding: 32 }}>
          Text input:{" "}
          <input
            type="text"
            aria-label="Test text"
            defaultValue="Edit this text"
          />
        </label>
      ),
    },
  },
};

const data: Data = {
  root: { props: {} },
  content: [{ type: "InputBlock", props: { id: "input-block" } }],
};

createRoot(document.getElementById("root")!).render(
  <Puck config={config} data={data} headerTitle="Puck input test" />
);
