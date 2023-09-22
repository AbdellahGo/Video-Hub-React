import { Link } from 'react-router-dom'
import {
  demoChannelTitle, demoChannelUrl, demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl
} from '../utils/constants'


const VideoCard = ({ video, customLayout }) => {
  return (
    <div className={`card-parent p-0 p-md-3 ${!customLayout ? ' col-12 col-md-6 col-xl-3': ' col-lg-12  col-md-4 col-6 p-lg-0 p-sm-3 p-0'}`}>
      <div class="card bg-black">
        <Link to={`/video/${video?.id?.videoId}` || demoVideoUrl}>
          <img src={video?.snippet?.thumbnails?.medium?.url || demoThumbnailUrl} class="w-100 card-img-top" alt="video thumbnails" />
        </Link>

        <div class="card-body bg-dark">
          <Link to={`/video/${video?.id?.videoId}` || demoVideoUrl}>
            <h5 class="card-title text-light">{video?.snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}...</h5>
          </Link>
          <Link to={`/channel/${video?.snippet?.channelId}` || { demoChannelUrl }}>
            <p class="card-text d-inline me-2 text-light">{video?.snippet?.channelTitle || demoChannelTitle}</p>
            <i class="check fa-xs fa-solid fa-circle-check text-light"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VideoCard