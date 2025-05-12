import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowBackIcon(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.39 20.313L5.079 13l7.313-7.313M6.094 13h14.828"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowBackIcon;
