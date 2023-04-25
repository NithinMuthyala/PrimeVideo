import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachItem} = props
  const {videoUrl, thumbnailUrl} = eachItem

  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />}
    >
      {close => (
        <div className="popup-container">
          <div className="icon-container">
            <button
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
          <div>
            <ReactPlayer url={videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
