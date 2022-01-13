const GridDots = ({ ratio = [1, 1], scale = 400, radius = 4, color = 'var(--color-primary-light)' }) => {
  let width = ratio[0] * scale
  let height = ratio[1] * scale
  let viewBox = `0 0 ${width} ${height}`
  return (
    <div style={{ width: width, height: height }}>
      <svg viewBox={viewBox}>
        <defs>
          <pattern id="GridPatternCircle" x={0} y={0} width={radius * 3} height={radius * 3} patternUnits="userSpaceOnUse">
            <circle cx={radius} cy={radius} r={radius} stroke="none" fill={color} />
          </pattern>
        </defs>
        <rect width={width} height={height} fill="url(#GridPatternCircle)" />
      </svg>
    </div>
  )
}

export default GridDots
