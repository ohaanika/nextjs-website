import PlaceholderImage from './placeholderImage'

const PlaceholderLogo = ({ color = 'var(--color-placeholder)' }) => {
  return <PlaceholderImage ratio={[3, 1]} scale={36} color={color} />
}

export default PlaceholderLogo
