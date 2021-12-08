
const FillPatternLine = ({
  width=100,
  thickness=4,
  color="var(--color-placeholder)",
  id="patternLine",
}) => {
  return (
    <pattern id={id} x={0} y={0} width={width} height={thickness*2} patternUnits="userSpaceOnUse">
      <line x1={0} y1={0} x2={width} y2={0} stroke={color} strokeWidth={thickness*2}/>
    </pattern>
  )
}

const FillPatternCircle = ({
  thickness=4,
  color="var(--color-placeholder)",
  id="patternCircle",
}) => {
  return (
    <pattern id={id} x={0} y={0} width={thickness*2} height={thickness*2} patternUnits="userSpaceOnUse">
      <circle cx={thickness*2/3} cy={thickness*2/3} r={thickness*2/3} stroke="none" fill={color}/>
    </pattern>
  )
}

const BarFaceTop = ({
  xShift, yShift,
  thickness=4,
  color="var(--color-placeholder)",
  fill={background: "none", pattern: "url(#patternLine)"},
}) => {
  return (
    <g>
      <path 
        d={`M 0 ${yShift} l ${xShift} ${yShift} l ${xShift} -${yShift} l -${xShift} -${yShift} l -${xShift} ${yShift} z`}
        fill={fill.background} stroke={color} strokeWidth={thickness} strokeLinejoin="round"
      />
      <path 
        d={`M 0 ${yShift} l ${xShift} ${yShift} l ${xShift} -${yShift} l -${xShift} -${yShift} l -${xShift} ${yShift} z`}
        fill={fill.pattern} stroke={color} strokeWidth={thickness} strokeLinejoin="round"
      />
    </g>
  )
}

const BarFaceLeft = ({
  xShift, yShift, height,
  thickness=4,
  color="var(--color-placeholder)",
  fill={background: "none", pattern: "none"},
}) => {
  return (
    <g>
      <path 
        d={`M 0 ${yShift} v ${height} l ${xShift} ${yShift} v -${height} z`}
        fill={fill.background} stroke={color} strokeWidth={thickness} strokeLinejoin="round"
      />
      <path 
        d={`M 0 ${yShift} v ${height} l ${xShift} ${yShift} v -${height} z`}
        fill={fill.pattern} stroke={color} strokeWidth={thickness} strokeLinejoin="round"
      />
    </g>
  )
}

const BarFaceRight = ({
  xShift, yShift, height, thickness,
  color="var(--color-placeholder)",
  fill={background: "none", pattern: "url(#patternCircle)"},
}) => {
  return (
    <g>
      <path 
        d={`M ${xShift*2} ${yShift} v ${height} l -${xShift} ${yShift} v -${height} z`}
        fill={fill.background} stroke={color} strokeWidth={thickness} strokeLinejoin="round"
      />
      <path 
        d={`M ${xShift*2} ${yShift} v ${height} l -${xShift} ${yShift} v -${height} z`}
        fill={fill.pattern} stroke={color} strokeWidth={thickness} strokeLinejoin="round"
      />
    </g>
  )
}

const Bar3D = ({
  ratio=[1,1],
  scale=100,
  thickness=4,
  color="var(--color-placeholder)",
  fills={
    top: {background: "none", pattern: "url(#patternLine)"},
    left: {background: "none", pattern: "none"},
    right: {background: "none", pattern: "url(#patternCircle)"},
  },
}) => {
  let width = ratio[0] * scale
  let height = ratio[1] * 2/3 * scale
  let xShift = width/2
  let yShift = width/3
  let viewWidth = width + thickness
  let viewHeight = height + yShift*2 + thickness
  let viewBox = `-${thickness/2} -${thickness/2} ${viewWidth} ${viewHeight}`
  return (
    <div style={{width: viewWidth, height: viewHeight}}>
      <svg viewBox={viewBox}>
        <defs>
          <FillPatternLine width={width} thickness={thickness} color={color} id="patternLine"/>
          <FillPatternCircle radius={thickness} color={color} id="patternCircle"/>
        </defs>
        <BarFaceTop xShift={xShift} yShift={yShift} thickness={thickness} color={color} fill={fills.top}/>
        <BarFaceLeft xShift={xShift} yShift={yShift} height={height} thickness={thickness} color={color} fill={fills.left}/>
        <BarFaceRight xShift={xShift} yShift={yShift} height={height} thickness={thickness} color={color} fill={fills.right}/>
      </svg>
    </div>
  )
}

export default Bar3D
