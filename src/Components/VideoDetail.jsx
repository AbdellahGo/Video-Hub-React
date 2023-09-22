import React from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { useGetVideoDetailQuery, useGetVideosByIdQuery } from '../redux/services/videosApi'
import VideoCard from './VideoCard'

const VideoDetail = () => {
  const { id } = useParams()
  const { data: videoDetail } = useGetVideoDetailQuery(id)
  const { data: videos } = useGetVideosByIdQuery(id)
  const detail = videoDetail?.items[0]
  return (
    <div style={{ marginTop: '83px' }}>
      <div className='row m-0'>
        <div className='col-12 col-lg-9' style={{ height: '920px' }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player m-0 w-100" controls />
          <h5 className='fs-2 pt-3'>{detail?.snippet?.title}</h5>
          <div className='d-flex justify-content-between mt-4 text-white-50'>
            <Link to={`/channel/${detail?.snippet?.channelId}`}>
              <span className='me-2 fs-5 text-white-50'>{detail?.snippet?.channelTitle}</span>
              <i class="text-white-50 check fa-xs fa-solid fa-circle-check"></i>
            </Link>
            <div className='fs-5'>
              <span className='me-3'>{parseInt(detail?.statistics?.viewCount).toLocaleString()} View</span>
              <span>{parseInt(detail?.statistics?.likeCount).toLocaleString()} Like</span>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-3'>
          <div className='row m-0 row-gap-4 pt-3 px-3'>
            {videos?.items?.map((item) => (
              <React.Fragment key={item?.id?.videoId}>
                {<VideoCard video={item} customLayout={true} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail