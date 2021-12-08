const Pill = ({ratio=[2,1], scale=20, color="var(--color-placeholder)"}) => {
  let width = ratio[0] * scale
  let height = ratio[1] * scale
  let curve = Math.min(height, width)/2
  let viewBox = "0 0 " + width + " " + height
  return (
    <div style={{width: width, height: height}}>
      <svg viewBox={viewBox}>
        <rect width={width} height={height} fill={color} ry={curve} rx={curve}/>
      </svg>
    </div>
  )
}

export default Pill
