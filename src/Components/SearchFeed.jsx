import React from 'react'
import { VideoCard, Videos } from '../Components'
import { useGetVideosByCategoryQuery } from '../redux/services/videosApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const {searchterm} = useParams()
  const { data } = useGetVideosByCategoryQuery(searchterm)
  return (
    <div className='search-feed'>
      <div className='row m-0 row-gap-4 pt-3 px-3'>
        {data?.items?.map((item) => (
          <React.Fragment key={item?.id?.videoId}>
            {<VideoCard video={item} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SearchFeed