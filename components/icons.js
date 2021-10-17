import * as React from "react";

function BlogIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="2em"
      height="2em"
      {...props}
    >
      <path
        d="M512 467.478C512 492.066 492.066 512 467.478 512H44.522C19.933 512 0 492.066 0 467.478c0-24.588 19.933-44.522 44.522-44.522h422.957c24.587.001 44.521 19.934 44.521 44.522z"
        fill="#a5a5a5"
      />
      <path
        d="M169.739 478.609a8.349 8.349 0 01-8.348 8.348H72.348a8.349 8.349 0 010-16.696h89.043a8.347 8.347 0 018.348 8.348zm269.913-8.348H272.696a8.349 8.349 0 000 16.696h166.957a8.349 8.349 0 00-.001-16.696zm-204.8 0h-1.113a8.349 8.349 0 000 16.696h1.113a8.349 8.349 0 000-16.696zm-34.504 0h-1.113a8.349 8.349 0 000 16.696h1.113a8.349 8.349 0 000-16.696z"
        fill="#777"
      />
      <path
        d="M478.609 155.826v244.87c0 24.588-19.934 44.522-44.522 44.522H77.913c-24.588 0-44.522-19.934-44.522-44.522v-244.87c0-24.588 19.933-44.522 44.522-44.522h356.174c24.588 0 44.522 19.934 44.522 44.522z"
        fill="#cccac4"
      />
      <path
        d="M434.087 422.957H77.913c-12.295 0-22.261-9.966-22.261-22.261v-244.87c0-12.295 9.966-22.261 22.261-22.261h356.174c12.295 0 22.261 9.966 22.261 22.261v244.87c0 12.294-9.966 22.261-22.261 22.261z"
        fill="#f2efe2"
      />
      <path
        d="M406.261 203.13H105.739c-9.22 0-16.696-7.475-16.696-16.696 0-9.22 7.475-16.696 16.696-16.696h300.522c9.22 0 16.696 7.475 16.696 16.696 0 9.221-7.476 16.696-16.696 16.696zM244.87 244.87c0-9.22-7.475-16.696-16.696-16.696H105.739c-9.22 0-16.696 7.475-16.696 16.696 0 9.22 7.475 16.696 16.696 16.696h122.435c9.221-.001 16.696-7.476 16.696-16.696zm178.087 0c0-9.22-7.475-16.696-16.696-16.696H283.826c-9.22 0-16.696 7.475-16.696 16.696 0 9.22 7.475 16.696 16.696 16.696h122.435c9.221-.001 16.696-7.476 16.696-16.696z"
        fill="#bfbba3"
      />
      <path
        d="M406.261 384H105.739c-9.22 0-16.696-7.475-16.696-16.696v-66.783c0-9.22 7.475-16.696 16.696-16.696h300.522c9.22 0 16.696 7.475 16.696 16.696v66.783c0 9.221-7.475 16.696-16.696 16.696z"
        fill="#ffd880"
      />
      <path
        d="M139.688 374.23l-2.332 2.332.086.086-19.098 19.098a7.308 7.308 0 01-10.334 0l-19.098-19.098.086-.086-2.332-2.332c-6.677-6.677-6.677-17.501 0-24.179 6.677-6.677 17.501-6.677 24.179 0l2.332 2.332 2.332-2.332c6.677-6.677 17.501-6.677 24.179 0 6.677 6.677 6.677 17.502 0 24.179z"
        fill="#fc8059"
      />
      <path
        d="M376.209 292.36l-22.261 29.682c-4.452 5.936-13.357 5.936-17.809 0l-22.261-29.682a11.13 11.13 0 01-2.226-6.678V22.261C311.652 9.966 321.618 0 333.913 0h22.261c12.295 0 22.261 9.966 22.261 22.261v263.421a11.14 11.14 0 01-2.226 6.678z"
        fill="#d6a154"
      />
      <path
        d="M370.087 300.522l-16.139 21.518c-4.452 5.936-13.357 5.936-17.809 0L320 300.522h50.087z"
        fill="#b26932"
      />
      <path
        d="M311.652 256V22.261C311.652 9.966 321.618 0 333.913 0h22.261c12.295 0 22.261 9.966 22.261 22.261V256h-66.783z"
        fill="#ffd880"
      />
      <path
        d="M345.043 256V0h11.13c12.295 0 22.261 9.966 22.261 22.261V256h-33.391z"
        fill="#fcc159"
      />
      <path
        d="M378.435 22.261v22.261h-66.783V22.261C311.652 9.966 321.618 0 333.913 0h22.261c12.295 0 22.261 9.966 22.261 22.261z"
        fill="#fc8059"
      />
    </svg>
  );
}

export const MemoBlogIcon = React.memo(BlogIcon);

function PortfolioIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 501.551 501.551"
      width="2em"
      height="2em"
      {...props}
    >
      <path
        d="M480.653 98.22H20.898C9.404 98.22 0 107.624 0 119.118v347.951c0 11.494 9.404 20.898 20.898 20.898h459.755c11.494 0 20.898-9.404 20.898-20.898V119.118c0-11.493-9.404-20.898-20.898-20.898z"
        fill="#40596b"
      />
      <path
        d="M158.824 88.816V50.155c0-3.135 2.09-5.224 5.225-5.224h172.408c3.135 0 5.224 2.09 5.224 5.224v38.661h31.347V50.155c0-19.853-16.718-36.571-36.571-36.571H164.049c-19.853 0-36.571 16.718-36.571 36.571v38.661h31.346z"
        fill="#acb3ba"
      />
      <g fill="#334a5e">
        <path d="M123.298 88.816h41.796v10.449h-41.796zM337.502 88.816h41.796v10.449h-41.796z" />
      </g>
      <path
        d="M315.559 321.829l-28.212-28.212c-9.404 9.404-21.943 15.673-36.571 15.673-28.212 0-52.245-22.988-52.245-52.245 0-14.629 6.269-27.167 15.673-36.571l-28.212-28.212c-2.09 2.09-4.18 5.224-6.269 7.314l-21.943-4.18-11.494 21.943 15.673 15.673c-2.09 6.269-3.135 12.539-3.135 18.808l-19.853 9.404 4.18 25.078 21.943 3.135c2.09 6.269 5.224 11.494 8.359 17.763l-10.449 19.853 17.763 17.763 19.853-10.449c5.224 4.18 11.494 6.269 17.763 9.404l3.135 21.943 25.078 4.18L256 350.041c6.269 0 12.539-1.045 18.808-3.135l15.673 15.673 21.943-11.494-4.18-21.943 7.315-7.313z"
        fill="#acb3ba"
      />
      <path
        d="M250.776 204.8c28.212 0 52.245 22.988 52.245 52.245 0 14.629-6.269 27.167-15.673 36.571l28.212 28.212c2.09-2.09 4.18-5.224 6.269-7.314l21.943 4.18 11.494-21.943-15.673-16.718c2.09-6.269 3.135-12.539 3.135-18.808l19.853-9.404-4.18-25.078-21.943-3.135c-2.09-6.269-5.224-11.494-8.359-17.763l10.449-19.853-17.763-17.763-19.853 10.449c-5.224-4.18-11.494-6.269-17.763-9.404l-3.135-21.943-25.078-4.18-9.404 20.898c-6.269 0-12.539 1.045-18.808 3.135l-15.673-15.673-21.943 11.494 4.18 21.943c-2.09 2.09-5.224 4.18-7.314 6.269l28.212 28.212c9.402-9.404 21.941-14.629 36.57-14.629z"
        fill="#cdd6e0"
      />
      <path
        d="M485.878 432.588a18.73 18.73 0 00-18.808-18.808h-27.167v37.616h27.167a18.73 18.73 0 0018.808-18.808z"
        fill="#ff7058"
      />
      <path
        fill="#ffd05c"
        d="M62.694 413.78v37.616l-22.988-8.359-24.033-10.449 24.033-9.404z"
      />
      <path fill="#acb3ba" d="M39.706 423.184v19.853l-24.033-10.449z" />
      <path fill="#84dbff" d="M62.694 413.78v11.493h359.445V413.78z" />
      <path fill="#54c0eb" d="M62.694 425.273h359.445v14.629H62.694z" />
      <path fill="#84dbff" d="M62.694 439.902h359.445v11.494H62.694z" />
      <path fill="#fff" d="M422.139 413.78h17.763v37.616h-17.763z" />
      <path d="M422.139 413.78h17.763-17.763z" fill="#55bfe9" />
      <path fill="#ffd15c" d="M439.902 425.273V413.78z" />
      <path fill="#55bfe9" d="M439.902 439.902v-14.629z" />
    </svg>
  );
}

export const MemoPortfolioIcon = React.memo(PortfolioIcon);

function GithubIcon(props) {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__icon"
      {...props}
    >
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg>
  );
}

export const MemoGithubIcon = React.memo(GithubIcon);

function DribbbleIcon(props) {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#E74D89"
        d="M11.432 8.635c-1.77-3.15-3.666-5.716-3.803-5.904A10.263 10.263 0 001.97 9.887c.27.004 4.54.056 9.46-1.252zm1.278 3.443c.135-.041.27-.083.404-.122a34.204 34.204 0 00-.832-1.741c-5.278 1.58-10.342 1.464-10.521 1.46-.003.107-.008.215-.008.325 0 2.635.995 5.038 2.63 6.852l-.007-.01s2.804-4.976 8.334-6.764zM5.701 20.08l.003-.005c-.076-.058-.157-.115-.233-.176.137.11.23.181.23.181zM9.62 2.076c-.036.01-.063.02-.1.03.055-.02.091-.03.1-.03zm9.15 2.234A10.198 10.198 0 0012 1.751c-.833 0-1.64.103-2.415.289.157.206 2.08 2.762 3.83 5.978 3.865-1.447 5.327-3.666 5.354-3.708zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm1.744-10.322c-6.015 2.096-8.001 6.31-8.04 6.396A10.2 10.2 0 0012 22.247c1.42 0 2.772-.29 4.002-.811-.152-.899-.747-4.038-2.19-7.783-.024.01-.046.015-.068.025zm.46-4.132a30.12 30.12 0 01.901 2.016c3.54-.446 7.024.31 7.14.335a10.206 10.206 0 00-2.332-6.406c-.02.029-1.663 2.405-5.709 4.055zm1.528 3.634c1.347 3.698 1.89 6.708 1.994 7.32a10.242 10.242 0 004.39-6.874c-.203-.066-3.07-.977-6.384-.446z"
      />
    </svg>
  );
}

export const MemoDribbbleIcon = React.memo(DribbbleIcon);

function ClubHouseIcon(props) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.677 4.122c-.44-.768-1.096-.658-1.279-.534a.808.808 0 00-.29.415c-.056.184-.065.462.17.844.553.9 2.54 3.38 3.636 4.714a.735.735 0 11-1.139.932L6.357 5.079a1.857 1.857 0 00-.62-.494c-.258-.12-.516-.142-.784.02-.191.116-.265.297-.23.566a1.4 1.4 0 00.39.78l5.28 5.709a.67.67 0 01-.976.92L4.915 7.91c-.367-.302-.849-.274-1.167.06-.357.374-.336.933.113 1.375l.064.063c.325.32 1.428 1.405 2.53 2.51.595.597 1.192 1.201 1.666 1.694a33.652 33.652 0 01.764.816c.078.084.187.208.245.325a.5.5 0 01-.86.504 3.266 3.266 0 00-.204-.242 10.889 10.889 0 00-.232-.233 37.14 37.14 0 00-.936-.876 71.053 71.053 0 00-1.502-1.332 1.25 1.25 0 00-.72-.263c-.268-.01-.377.08-.41.134-.203.344-.152.641-.007.917.132.252.317.44.454.58l.079.08c.072.078.242.23.522.477l.147.13c.245.216.544.478.88.782a51.036 51.036 0 012.967 2.884c1.641 1.738 3.689 2.19 4.449 2.205a.5.5 0 11-.02 1c-.986-.019-3.304-.556-5.156-2.519a50.021 50.021 0 00-2.909-2.828 96.88 96.88 0 00-1.02-.904 10.83 10.83 0 01-.63-.583c-.125-.125-.438-.438-.649-.84-.256-.489-.396-1.168.033-1.891.24-.403.648-.571 1.034-.614a455.202 455.202 0 00-1.28-1.263c-.752-.74-.948-1.927-.135-2.779.393-.412.909-.602 1.42-.576l-.06-.065a2.399 2.399 0 01-.654-1.34c-.07-.542.082-1.17.703-1.548.627-.38 1.252-.291 1.725-.072.409.19.732.486.923.708a1.804 1.804 0 01.753-1.624c.642-.438 1.968-.435 2.71.863.547.958 2.784 4.077 3.852 5.54.138.188.33.411.541.562.216.156.365.178.468.148.166-.048.32-.207.452-.569.114-.313.173-.672.23-1.02l.025-.145c.074-.443.31-1.077.748-1.612.447-.547 1.128-1.014 2.069-1.025.46-.005.85.106 1.136.358.287.254.398.588.426.885.028.293-.021.582-.088.813a2.135 2.135 0 01-.263.59 5.342 5.342 0 00-.575 1.217c-.207.62-.34 1.369-.209 2.12.043.243.094.496.147.757.302 1.5.663 3.29-.176 5.354-.388.953-.89 1.726-1.416 2.298-.518.564-1.086.962-1.617 1.116a.5.5 0 11-.278-.961c.293-.085.712-.346 1.159-.832.44-.478.88-1.147 1.226-1.998.717-1.764.425-3.236.128-4.732-.054-.276-.109-.552-.158-.83-.169-.969.007-1.894.246-2.608a6.306 6.306 0 01.7-1.469c.023-.032.08-.141.125-.3.044-.153.066-.311.054-.441-.012-.126-.05-.191-.093-.23-.044-.038-.163-.11-.463-.107-.577.007-1 .283-1.306.658a2.644 2.644 0 00-.558 1.279c-.055.338-.13.799-.28 1.208-.168.461-.481 1.001-1.11 1.186-.532.156-1.007-.061-1.333-.296a3.6 3.6 0 01-.764-.784c-1.05-1.438-3.331-4.614-3.913-5.633zm1.465 6.074l-.001-.001z"
        fill="#000"
      />
    </svg>
  );
}

export const MemoClubHouseIcon = React.memo(ClubHouseIcon);

function InstagramIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 551.034 551.034"
      width="1.5em"
      height="1.5em"
      {...props}
    >
      <linearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={275.517}
        y1={4.571}
        x2={275.517}
        y2={549.72}
        gradientTransform="matrix(1 0 0 -1 0 554)"
      >
        <stop offset={0} stopColor="#e09b3d" />
        <stop offset={0.3} stopColor="#c74c4d" />
        <stop offset={0.6} stopColor="#c21975" />
        <stop offset={1} stopColor="#7024c4" />
      </linearGradient>
      <path
        d="M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156C551.033 73.64 477.393 0 386.878 0zM495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722c60.045 0 108.722 48.676 108.722 108.722v222.722z"
        fill="url(#prefix__a)"
      />
      <linearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={275.517}
        y1={4.571}
        x2={275.517}
        y2={549.72}
        gradientTransform="matrix(1 0 0 -1 0 554)"
      >
        <stop offset={0} stopColor="#e09b3d" />
        <stop offset={0.3} stopColor="#c74c4d" />
        <stop offset={0.6} stopColor="#c21975" />
        <stop offset={1} stopColor="#7024c4" />
      </linearGradient>
      <path
        d="M275.517 133C196.933 133 133 196.933 133 275.516s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516 354.101 133 275.517 133zm0 229.6c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083c48.095 0 87.083 38.988 87.083 87.083 0 48.094-38.989 87.083-87.083 87.083z"
        fill="url(#prefix__b)"
      />
      <linearGradient
        id="prefix__c"
        gradientUnits="userSpaceOnUse"
        x1={418.306}
        y1={4.571}
        x2={418.306}
        y2={549.72}
        gradientTransform="matrix(1 0 0 -1 0 554)"
      >
        <stop offset={0} stopColor="#e09b3d" />
        <stop offset={0.3} stopColor="#c74c4d" />
        <stop offset={0.6} stopColor="#c21975" />
        <stop offset={1} stopColor="#7024c4" />
      </linearGradient>
      <circle cx={418.306} cy={134.072} r={34.149} fill="url(#prefix__c)" />
    </svg>
  );
}

export const MemoInstagramIcon = React.memo(InstagramIcon);

function TwitterIcon(props) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#1DA1F2"
        fillRule="evenodd"
        d="M24 4.309a9.83 9.83 0 01-2.828.775 4.94 4.94 0 002.165-2.724 9.865 9.865 0 01-3.127 1.196 4.925 4.925 0 00-8.39 4.49A13.974 13.974 0 011.671 2.9a4.902 4.902 0 00-.667 2.476c0 1.708.869 3.216 2.191 4.099A4.936 4.936 0 01.964 8.86v.06a4.926 4.926 0 003.95 4.829 4.964 4.964 0 01-2.224.085 4.93 4.93 0 004.6 3.42 9.886 9.886 0 01-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 007.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.309"
      />
    </svg>
  );
}

export const MemoTwitterIcon = React.memo(TwitterIcon);

function LinkedIn(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 382 382"
      width="1.5em"
      height="1.5em"
      {...props}
    >
      <path
        d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
        fill="#0077b7"
      />
    </svg>
  );
}

export const MemoLinkedIn = React.memo(LinkedIn);

function MailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 474 474"
      width="1.5em"
      height="1.5em"
      {...props}
    >
      <path d="M437.5 59.3h-401C16.4 59.3 0 75.7 0 95.8v282.4c0 20.1 16.4 36.5 36.5 36.5h401c20.1 0 36.5-16.4 36.5-36.5V95.8c0-20.1-16.4-36.5-36.5-36.5zm-5.3 27L239.5 251.1 46.8 86.3h385.4zM447 378.2c0 5.2-4.3 9.5-9.5 9.5h-401c-5.2 0-9.5-4.3-9.5-9.5V104.9l203.7 174.2c.1.1.3.2.4.3.1.1.3.2.4.3.3.2.5.4.8.5.1.1.2.1.3.2l1.2.6c.1 0 .2.1.3.1.3.1.6.3 1 .4.1 0 .3.1.4.1.3.1.6.2.9.2.1 0 .3.1.4.1.3.1.7.1 1 .2h.3c.4 0 .9.1 1.3.1s.9 0 1.3-.1h.3c.3 0 .7-.1 1-.2.1 0 .3-.1.4-.1.3-.1.6-.2.9-.2.1 0 .3-.1.4-.1.3-.1.6-.2 1-.4.1 0 .2-.1.3-.1l1.2-.6c.1-.1.2-.1.3-.2.3-.2.5-.3.8-.5.1-.1.3-.2.4-.3.1-.1.3-.2.4-.3L447 109.2v269z" />
    </svg>
  );
}

export const MemoMailIcon = React.memo(MailIcon);