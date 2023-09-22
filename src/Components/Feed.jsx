import React, { useState } from 'react'
import { SideBar, Videos } from '../Components'
import { useGetVideosByCategoryQuery } from '../redux/services/videosApi'

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('JS Mastery')
    const { data } = useGetVideosByCategoryQuery(selectedCategory)
    return (
        <div className='row m-0'>
            <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className='row m-0 justify-content-end'>
                <Videos videos={data?.items} selectedCategory={selectedCategory} />
            </div>
        </div>
    )
}

export default Feed