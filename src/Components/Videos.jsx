import React from 'react'
import {ChannelCard, VideoCard} from '../Components';

const Videos = ({ videos, selectedCategory }) => {
  return (
    <div className='videos col-12 col-md-9 col-xl-10'>
      <div>
        <h1 className='m-0 fw-bold'>
          {selectedCategory} <span>Videos</span>
        </h1>
      </div>
      <div className='row row-gap-4 pt-3 px-3'>
        {videos?.map((item) => (
          <React.Fragment key={item?.id?.videoId}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Videos