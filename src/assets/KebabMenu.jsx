import * as React from "react"
import Svg, { Path } from "react-native-svg"

function  KebabIcon(props) {
  return (
    <Svg
      width={4}
      height={18}
      viewBox="0 0 4 18"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.375 2.094a1.625 1.625 0 113.25 0 1.625 1.625 0 01-3.25 0zM2 7.375a1.625 1.625 0 100 3.25 1.625 1.625 0 000-3.25zm0 6.906a1.625 1.625 0 100 3.251 1.625 1.625 0 000-3.25z"
         stroke="#fff"
      />
    </Svg>
  )
}

export default KebabIcon;
