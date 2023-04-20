import * as React from "react";
import { SVGProps, memo } from "react";
const SvgLockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <path
      fill="currentColor"
      d="M67.5 40.313a2.833 2.833 0 0 1-2.813-2.813V30c0-11.813-3.337-19.688-19.687-19.688S25.312 18.189 25.312 30v7.5a2.833 2.833 0 0 1-2.812 2.813 2.833 2.833 0 0 1-2.813-2.813V30c0-10.875 2.625-25.313 25.313-25.313S70.313 19.126 70.313 30v7.5a2.833 2.833 0 0 1-2.813 2.813Z"
    />
    <path
      fill="currentColor"
      d="M63.75 85.313h-37.5c-16.538 0-21.563-5.026-21.563-21.563v-7.5c0-16.538 5.026-21.563 21.563-21.563h37.5c16.537 0 21.563 5.026 21.563 21.563v7.5c0 16.537-5.026 21.563-21.563 21.563Zm-37.5-45c-13.425 0-15.938 2.55-15.938 15.937v7.5c0 13.388 2.513 15.938 15.938 15.938h37.5c13.425 0 15.938-2.55 15.938-15.938v-7.5c0-13.388-2.513-15.938-15.938-15.938h-37.5Z"
    />
    <path
      fill="currentColor"
      d="M30 63.75c-.488 0-.975-.112-1.425-.3-.488-.187-.863-.45-1.238-.788-.674-.712-1.087-1.65-1.087-2.662 0-.487.112-.975.3-1.425.187-.488.45-.863.787-1.238.375-.337.75-.6 1.238-.787 1.35-.6 3.038-.262 4.088.788.337.374.6.787.787 1.237.188.45.3.938.3 1.425 0 .975-.413 1.95-1.087 2.663-.713.675-1.688 1.087-2.663 1.087Z"
    />
    <path
      fill="#1B6CA8"
      d="M45 63.75c-.975 0-1.95-.412-2.663-1.087-.675-.713-1.087-1.65-1.087-2.663 0-.487.075-.975.3-1.425.187-.45.45-.862.788-1.237.862-.863 2.175-1.275 3.374-1.013.263.038.488.113.713.225.225.075.45.188.675.338.188.112.375.3.563.45.337.375.6.787.787 1.237.188.45.3.938.3 1.425 0 1.013-.413 1.95-1.087 2.663l-.563.45a2.84 2.84 0 0 1-.675.337c-.225.113-.45.188-.712.225a4.595 4.595 0 0 1-.713.075ZM60 63.75c-1.013 0-1.95-.412-2.663-1.087a4.33 4.33 0 0 1-.787-1.238c-.188-.45-.3-.937-.3-1.425 0-.975.413-1.95 1.087-2.662l.563-.45c.225-.15.45-.263.675-.338.225-.112.45-.187.675-.225 1.237-.262 2.513.15 3.413 1.013.675.712 1.087 1.65 1.087 2.662 0 .488-.112.975-.3 1.425-.187.488-.45.863-.788 1.238-.712.675-1.687 1.087-2.662 1.087Z"
    />
  </svg>
);
const Memo = memo(SvgLockIcon);
export default Memo;