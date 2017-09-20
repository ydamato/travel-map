export const showModalSlideShow = initialPosition => ({
  type: 'UPDATE_SLIDESHOW_VISIBILITY',
  showSlideShow: true,
  initialPosition
});

export const hideModalSlideShow = () => ({
  type: 'UPDATE_SLIDESHOW_VISIBILITY',
  showSlideShow: false
});
