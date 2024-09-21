export const scrollToTop = () => {
  let intervalId = 0

  function scrollStep() {
    if (window.pageYOffset === 0) clearInterval(intervalId)
    window.scroll(0, window.pageYOffset - 200)
  }

  function scrollToTop() {
    intervalId = setInterval(scrollStep, 10)
  }

  scrollToTop()
}

export default scrollToTop
