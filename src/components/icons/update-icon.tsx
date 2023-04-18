import * as React from "react";
import { SVGProps, memo } from "react";
const SvgUpdateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 42 42"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21.026 28.5a1.759 1.759 0 0 0 1.224-.519c.323-.326.5-.763.494-1.217V10.347l2.254 2.214a1.744 1.744 0 0 0 1.24.527 1.77 1.77 0 0 0 1.251-.502 1.71 1.71 0 0 0 .51-1.229 1.686 1.686 0 0 0-.535-1.218l-5.231-5.138A1.76 1.76 0 0 0 21 4.5c-.462 0-.906.18-1.233.501l-5.23 5.138A1.714 1.714 0 0 0 14 11.357a1.685 1.685 0 0 0 .51 1.229 1.744 1.744 0 0 0 1.252.502 1.77 1.77 0 0 0 1.24-.527l2.254-2.214v16.417a1.686 1.686 0 0 0 .511 1.235 1.746 1.746 0 0 0 1.259.5Z"
    />
    <path
      fill="currentColor"
      d="M7.642 28.5a1.684 1.684 0 0 0-1.17.495c-.308.31-.478.728-.472 1.16v2.449c0 2.684 2.258 4.896 5 4.896h20c2.742 0 5-2.212 5-4.896v-2.449a1.6 1.6 0 0 0-.48-1.169 1.697 1.697 0 0 0-2.374 0 1.628 1.628 0 0 0-.48 1.17v2.448c0 .92-.726 1.632-1.666 1.632H11c-.94 0-1.667-.712-1.667-1.632v-2.449a1.602 1.602 0 0 0-.488-1.177 1.67 1.67 0 0 0-1.203-.477Z"
    />
  </svg>
);
const Memo = memo(SvgUpdateIcon);
export default Memo;