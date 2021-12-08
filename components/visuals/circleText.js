const CircleText = ({diameter=500, color="var(--color-placeholder)"}) => {
  let radius = diameter/2
  let circumference = diameter * Math.PI
  let viewBox = "0 0 " + diameter + " " + diameter
  return (
    <div style={{width: diameter, height: diameter}}>
      <svg viewBox={viewBox}>
        <defs>
          <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="circlepath" stroke={color}>
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="30s"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              repeatCount="indefinite"
            />
          </path>
        </defs>
        <text dy="0" textLength={circumference} color={color}>
          <textPath href="#circlepath">Red Hot Chilli Peppers</textPath>
        </text>
      </svg>
    </div>
  )
}

export default CircleText
