const CircleText = ({diameter=400, color="var(--color-placeholder)", children}) => {
  let radius = diameter/2
  let a = 4/10 * diameter
  let b = 8/10 * diameter
  let c = 2/10 * diameter
  let d = 6/10 * diameter

  let fontSize = diameter/8
  let circumference = radius * Math.PI
  let viewBox = "0 0 " + diameter + " " + diameter

  return (
    <div style={{width: diameter, height: diameter, fontSize: fontSize}}>
      <svg viewBox={viewBox}>
        <defs>
          <path id="circlePath"
            d={`M ${a},${b} a ${c},${c} 0 0,1 0,-${d} a ${c},${c} 0 0,1 0,${d} Z`}
            transform={`rotate(20,${a},${a})`}>
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="30s"
              type="rotate"
              from={`0 ${radius} ${radius}`}
              to={`360 ${radius} ${radius}`}
              repeatCount="indefinite"
            />
          </path>
        </defs>
        <text dy="0" textLength={circumference} fill={color}>
          <textPath href="#circlePath">{children}</textPath>
        </text>
      </svg>
    </div>
  )
}

export default CircleText
