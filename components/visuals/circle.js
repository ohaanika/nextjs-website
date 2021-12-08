const Circle = ({diameter=20, color="var(--color-placeholder)"}) => {
  let radius = diameter/2
  let viewBox = "0 0 " + diameter + " " + diameter
  return (
    <div style={{width: diameter, height: diameter}}>
      <svg viewBox={viewBox}>
        <circle cx={radius} cy={radius} r={radius} fill={color}/>
      </svg>
    </div>
  )
}

export default Circle
