import { PrismSyntaxHighlight } from "./code"
import { Pre } from "./pre"
import TabGroup from "../TabGroup"
import { YouTube } from "./youtube"
import TypeText from "../TypeText"
import Popup from "../Popup"
import { Components } from "@mdx-js/react/lib"
import { Admonition } from "../Admonition"
import { CodeSandBoxLink } from "../CodeSandbox"

export const MDXComponents: Components = {
  // p: P,
  // strong: Strong,
  // blockquote: Blockquote,
  // ol: OL,
  // ul: UL,
  // li: LI,
  // h1: H1,
  // h2: H2,
  // h3: H3,
  // h4: H4,
  // hr: Divider,
  // a: Link,
  // img: ResponsiveImage,
  // Layout,
  Admonition,
  Popup,
  TypeText,
  YouTube(props) {
    return <YouTube {...props} />
  },
  CodeSandbox: CodeSandBoxLink,
  pre(props) {
    return <Pre {...props} />
  },
  code({ className, children, ...props }) {
    return className ? (
      <PrismSyntaxHighlight className={className} {...props}>
        {children}
      </PrismSyntaxHighlight>
    ) : (
      <code {...props}>{children}</code>
    )
  },
  TabGroup,
}
