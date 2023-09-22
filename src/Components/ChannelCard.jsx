import { Link } from 'react-router-dom'
import {
  demoChannelTitle, demoChannelUrl, demoProfilePicture,
  demoVideoTitle,
  demoVideoUrl
} from '../utils/constants'


const ChannelCard = ({ channelDetail, specialSection }) => {
  console.log(channelDetail);
  return (
    <div className='card-parent col-12 col-md-6  col-xl-3 mx-auto'>
      <div class='card text-center border-0' style={{backgroundColor: `${!specialSection ? 'black' : 'unset'}`}}>
        <Link className='p-2' to={`channel/${channelDetail?.snippet?.channelId}` || demoChannelUrl}>
          <img src={channelDetail?.snippet?.thumbnails?.medium?.url || demoProfilePicture} class="w-75 card-img-top rounded-pill" alt="video thumbnails" />
        </Link>
        <div class="card-body">
          <Link to={`channel/${channelDetail?.snippet?.channelId}` || demoChannelUrl}>
            <h5 class="card-text d-inline me-2 text-light">{channelDetail?.snippet?.channelTitle || demoChannelTitle}</h5>
            <i class="check fa-xs fa-solid fa-circle-check text-light"></i>
          </Link>
          {channelDetail?.statistics?.subscriberCount && (
            <p className='text-light'>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChannelCard