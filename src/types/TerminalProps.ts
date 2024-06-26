import { ReactNode } from "react";
import ContentProps from "../types/ContentProps.ts";

type TerminalProps =
  | {
      type: "manpage";
      content: ContentProps[];
    }
  | {
      type: "blog";
      content: ReactNode;
    }
  | {
      type: "contact";
      content: ReactNode;
    };

export default TerminalProps;
