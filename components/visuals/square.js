const Square = ({ratio=[1,1], scale=20, color="var(--color-placeholder)"}) => {
  let width = ratio[0] * scale
  let height = ratio[1] * scale
  let viewBox = "0 0 " + width + " " + height
  return (
    <div style={{width: width, height: height}}>
      <svg viewBox={viewBox}>
        <rect width={width} height={height} fill={color}/>
      </svg>
    </div>
  )
}

export default Square
