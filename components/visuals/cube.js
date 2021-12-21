const Cube = ({ ratio = [1, 1, 1], scale = 200, color = 'var(--color-placeholder)' }) => {
  let width = ratio[0] * scale
  let height = ratio[1] * scale
  let viewBox = '0 0 ' + width + ' ' + height
  return (
    <div style={{ width: width, height: height }}>
      <svg x="0px" y="0px" viewBox="0 0 501.333 501.333" style={{ enableBackground: 'new 0 0 501.333 501.333' }} space="preserve">
        <path fill={color} d="M466.133,331.733 H170.667V33.067h295.467V331.733z M195.2,306.133h245.333V58.667H195.2V306.133z" />
        <g>
          <ellipse fill={color} cx="453.333" cy="49.067" rx="20" ry="21.067" />
          <ellipse fill={color} cx="183.467" cy="49.067" rx="20" ry="21.067" />
          <ellipse fill={color} cx="453.333" cy="315.733" rx="20" ry="21.067" />
          <ellipse fill={color} cx="183.467" cy="315.733" rx="20" ry="21.067" />
        </g>
        <g>
          <path
            fill={color}
            d="M330.667,468.267H35.2V169.6h295.467V468.267z M60.8,442.667h245.333V195.2H60.8L60.8,442.667
            L60.8,442.667z"
          />
          <path
            fill={color}
            d="M453.333,45.867c-5.333-5.333-12.8-5.333-18.133,0l-125.867,128L327.467,192L453.333,64
            C458.667,58.667,458.667,51.2,453.333,45.867z"
          />
          <path
            fill={color}
            d="M453.333,318.933c-5.333-5.333-12.8-5.333-18.133,0l-125.867,128l18.133,18.133l125.867-128
            C458.667,331.733,458.667,324.267,453.333,318.933z"
          />
          <path
            fill={color}
            d="M183.467,318.933c-5.333-5.333-12.8-5.333-18.133,0l-125.867,128L57.6,465.067l125.867-128
            C187.733,331.733,187.733,324.267,183.467,318.933z"
          />
          <path
            fill={color}
            d="M183.467,45.867c-5.333-5.333-12.8-5.333-18.133,0l-125.867,128L57.6,192L183.467,64
            C187.733,58.667,187.733,51.2,183.467,45.867z"
          />
        </g>
        <g>
          <ellipse fill={color} cx="317.867" cy="185.6" rx="20" ry="21.067" />
          <ellipse fill={color} cx="48" cy="185.6" rx="20" ry="21.067" />
          <ellipse fill={color} cx="317.867" cy="452.267" rx="20" ry="21.067" />
          <ellipse fill={color} cx="48" cy="452.267" rx="20" ry="21.067" />
        </g>
      </svg>
    </div>
  )
}

export default Cube
