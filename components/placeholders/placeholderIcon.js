import PlaceholderImage from "./placeholderImage"

const PlaceholderIcon = ({color="var(--color-placeholder)"}) => {
  return (
    <PlaceholderImage ratio={[1,1]} scale={20} color={color}/>
  )
}

export default PlaceholderIcon
