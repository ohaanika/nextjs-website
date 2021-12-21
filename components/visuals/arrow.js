const Arrow = ({thickness=3, length=200, color="var(--color-placeholder)"}) => {
  let arrowWidth = 10
  let arrowHeight = 10
  let width = length + thickness
  let height = arrowWidth + thickness
  let viewBox = "0 0 " + width + " " + height
  return (
    <div style={{width: width, height: height}}>
      {/* <svg viewBox={viewBox}> */}
      <svg viewBox="0 0 100 100">
        <defs>
          <marker id="arrow"
          viewBox="0 0 10 13" refX={arrowWidth/2} refY={arrowWidth/2}
          markerWidth="6" markerHeight="6"
          orient="auto">
            <path d={`M ${thickness} ${thickness} 
            L ${arrowHeight + thickness} ${arrowWidth/2 + thickness/2} 
            L ${thickness} ${arrowWidth}`} 
            fill="none" stroke={color}/>
          </marker>
        </defs>

        <path d="M 10 10 h 50" 
        fill="none" stroke={color} strokeWidth={thickness} markerEnd="url(#arrow)"/>
        {/* <polyline points="10,10 90,10" fill="none" stroke="black" markerEnd="url(#arrow)"  /> */}
        {/* <line x1={0} y1={0} x2={length} y2={0} stroke={color} strokeWidth={thickness}/> */}

      </svg>
    </div>
  )
}

export default Arrow
