const defaultModalSlideShow = {
  showSlideShow: false,
  initialPosition: 0
};

const modalSlideShow = (state = defaultModalSlideShow, action) => {
  switch (action.type) {
    case 'UPDATE_SLIDESHOW_VISIBILITY':
      return {
        ...state,
        showSlideShow: action.showSlideShow,
        initialPosition: action.initialPosition || 0
      };

    default:
      return state;
  }
};

export default modalSlideShow;
