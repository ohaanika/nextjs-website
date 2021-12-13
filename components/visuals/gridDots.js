const FillPatternCircle = ({
  radius=4,
  color="var(--color-placeholder)",
  id="patternCircle",
}) => {
  return (
    <pattern id={id} x={0} y={0} width={radius*6} height={radius*6} patternUnits="userSpaceOnUse">
      <circle cx={radius} cy={radius} r={radius} stroke="none" fill={color}/>
    </pattern>
  )
}

const GridDots = ({
  ratio=[1,1],
  scale=400,
  radius=8,
  color="var(--color-primary-light)",
}) => {
  let width = ratio[0] * scale
  let height = ratio[1] * scale
  let viewBox = `0 0 ${width} ${height}`
  return (
    <div style={{width: width, height: height}}>
      <svg viewBox={viewBox}>
        <defs>
          <FillPatternCircle radius={radius} color={color} id="patternCircle"/>
        </defs>
        <rect width={width} height={height} fill="url(#patternCircle)"/>
      </svg>
    </div>
  )
}

export default GridDots
