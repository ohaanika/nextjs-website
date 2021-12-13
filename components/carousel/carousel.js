import styles from './carousel.module.css'

const Carousel = ({carouselCardList}) => {
  let isDown = false
  let startX
  let scrollLeft

  const handleMouseDown = (e) => {
    isDown = true
    e.target.classList.add('active')
    startX = e.pageX - e.target.offsetLeft
    scrollLeft = e.target.scrollLeft
  }

  const handleMouseLeave = (e) => {
    isDown = false
    e.target.classList.remove('active')
  }

  const handleMouseUp = (e) => {
    isDown = false
    e.target.classList.remove('active')
  }

  const handleMouseMove = (e) => {
    if (!isDown) {return}
    e.preventDefault()
    const x = e.pageX - e.target.offsetLeft
    const SCROLL_SPEED = 5
    const walk = (x - startX) * SCROLL_SPEED
    e.target.scrollLeft = scrollLeft - walk
  }

  const backgroundColorOptions = ["#f6bd60", "#f7ede2", "#f5cac3", "#84a59d", "#f28482"]

  function displayCarouselCard(CarouselCard, i) {
    return (
      // <li className={styles.item} style={{backgroundColor: backgroundColorOptions[i]}} key={i}>
      //   {CarouselCard}
      // </li>
      <div className={styles.item} key={i}>
        {CarouselCard}
      </div>
    )
  }

  return (
    <div>
      <div className={styles.gallery} 
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      >
        {carouselCardList.map((CarouselCard, i) => displayCarouselCard(CarouselCard, i))}
      </div>
    </div>
  )
}

export default Carousel