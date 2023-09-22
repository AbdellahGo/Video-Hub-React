import React from 'react'
import ChannelCard from './ChannelCard'
import { useGetChannelDetailQuery, useGetChannelVideosQuery } from '../redux/services/videosApi'
import { useParams } from 'react-router-dom'
import VideoCard from './VideoCard'

const ChannelDetail = () => {
  const { channelid } = useParams()
  const { data: channelDetail } = useGetChannelDetailQuery(channelid)
  const { data: channelVideos } = useGetChannelVideosQuery(channelid)
  return (
    <div style={{ marginTop: '83px' }}>
      <div>
        <div style={{ height: '350px', background: 'linear-gradient(61deg, rgba(121,9,105,1) 39%, rgba(0,212,255,1) 100%)' }}></div>
        <div className='channel-detail' style={{ marginTop: '-150px' }}>
          <ChannelCard channelDetail={channelDetail?.items[0]} specialSection={true} />
        </div>
      </div>
      <div className='search-feed'>
        <div className='row m-0 row-gap-4 pt-3 px-3'>
          {channelVideos?.items?.map((item) => (
            <React.Fragment key={item?.id?.videoId}>
              {<VideoCard video={item} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChannelDetail