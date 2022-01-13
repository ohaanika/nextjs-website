import PlaceholderImage from './placeholderImage'

const PlaceholderClientLogo = ({ color = 'var(--color-placeholder)' }) => {
  return <PlaceholderImage ratio={[3, 1]} scale={36} color={color} />
}

export default PlaceholderClientLogo
