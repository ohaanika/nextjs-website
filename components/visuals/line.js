const Line = ({thickness=5, length=200, color="var(--color-placeholder)"}) => {
  let viewBox = "0 0 " + length + " " + thickness
  return (
    <div style={{width: length, height: thickness}}>
      <svg viewBox={viewBox}>
        <line x1={0} y1={0} x2={length} y2={0} stroke={color} strokeWidth={thickness}/>
      </svg>
    </div>
  )
}

export default Line
