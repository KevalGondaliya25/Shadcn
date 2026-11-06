import * as React from "react";
import { Loader } from "lucide-react";
import { IconSvgProps } from "@/types";

export const Logo1: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    width={size || width}
    {...props}
    viewBox="0 0 34 34"
    fill="none"
  >
    <path
      className="dark:stroke-white stroke-black"
      d="M5.92308 1H1V33H8.38462M5.92308 1L25.6154 33M5.92308 1H10.8462L28.0769 27.6667V1M5.92308 1L5.92308 27.6667L23.1538 
1H28.0769M25.6154 33H33V1H28.0769M25.6154 33H20.6923L5.92308 9M28.0769 1L8.38462 33M8.38462 33H13.3077L28.0769 9"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logo = (props: IconSvgProps) => (
  <svg
    width="120"
    height="30"
    viewBox="0 0 1165 269"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="dark:fill-white fill-black"
      d="M919.084 0H1164.17V269H919.084V0Z"
      fill="#131313"
    />
    <path
      className="dark:fill-black fill-white"
      d="M1034.43 174.909H1005V84H1035.36C1044.27 84 1051.92 85.82 1058.31 89.4599C1064.7 93.0702 1069.6 98.2637 1073 105.04C1076.44 111.788 1078.15 119.881 1078.15 129.321C1078.15 138.791 1076.42 146.929 1072.96 153.735C1069.53 160.542 1064.56 165.78 1058.05 169.449C1051.54 173.089 1043.66 174.909 1034.43 174.909ZM1018.72 162.924H1033.68C1040.6 162.924 1046.36 161.622 1050.94 159.018C1055.53 156.384 1058.96 152.581 1061.24 147.61C1063.52 142.609 1064.66 136.512 1064.66 129.321C1064.66 122.19 1063.52 116.138 1061.24 111.166C1058.99 106.195 1055.63 102.422 1051.17 99.8469C1046.7 97.2724 1041.15 95.9851 1034.52 95.9851H1018.72V162.924Z"
      fill="white"
    />
    <path
      className="dark:fill-white fill-black"
      d="M612.722 0H857.811V269H612.722V0Z"
      fill="#131313"
    />
    <path
      className="dark:fill-black fill-white"
      d="M713.069 84L734.82 119.556H735.53L757.281 84H773.172L744.852 129.455L773.35 174.909H757.37L735.53 139.842H734.82L712.98 174.909H697L725.986 129.455L697.178 84H713.069Z"
      fill="white"
    />
    <path
      className="dark:fill-white fill-black"
      d="M306.362 0H551.451V269H306.362V0Z"
      fill="#131313"
    />
    <path
      className="dark:fill-black fill-white"
      d="M402.56 174.909H388L420.715 84H436.562L469.277 174.909H454.717L429.016 100.513H428.305L402.56 174.909ZM405.001 139.309H452.231V150.85H405.001V139.309Z"
      fill="white"
    />
    <path
      className="dark:fill-white fill-black"
      d="M0 0H245.089V269H0V0Z"
      fill="#131313"
    />
    <path
      className="dark:fill-black fill-white"
      d="M89.2131 174.909L64 84H78.4265L96.1378 154.401H96.9812L115.403 84H129.696L148.118 154.446H148.961L166.628 84H181.099L155.841 174.909H142.036L122.904 106.816H122.194L103.062 174.909H89.2131Z"
      fill="white"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

// export const LoadingIcon: React.FC<IconSvgProps> = ({
//   size = 24,
//   width,
//   height,
//   ...props
// }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 100 100"
//       preserveAspectRatio="xMidYMid"
//       width={width || 24}
//       height={height || 24}
//       style={{
//         shapeRendering: "auto",
//         display: "block",
//         background: "rgba(255, 255, 255, 0)",
//       }}
//     >
//       <g>
//         <circle
//           stroke-dasharray="164.93361431346415 56.97787143782138"
//           r="35"
//           strokeWidth="10"
//           stroke="#000"
//           fill="none"
//           cy="50"
//           cx="50"
//         >
//           <animateTransform
//             keyTimes="0;1"
//             values="0 50 50;360 50 50"
//             dur="1s"
//             repeatCount="indefinite"
//             type="rotate"
//             attributeName="transform"
//           ></animateTransform>
//         </circle>
//         <g></g>
//       </g>
//     </svg>
//   );
// };

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const LoadingIcon = () => {
  return (<Loader className="rotate-infinite" />)
}