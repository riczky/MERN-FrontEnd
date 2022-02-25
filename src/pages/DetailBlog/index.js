import React, { useEffect } from 'react'

import { RegisterBg } from '../../assets'
import { Gap, Link } from '../../components'
import './detailblog.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import  Axios  from 'axios'
import { useState } from 'react'

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
      // console.log('params: ', props.match.params.id)
      const id = props.match.params.id;
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then(res => {
        console.log('success: ', res)
        setData(res.data.data);
      })
      .catch(err => {
        console.log('err: ', err);
      })
  }, [props])


  const history = useHistory();
  
  if(data.author){
      return (
    
        <div className='detail-blog-wrapper'>
            <img className='img-cover' src={`http://localhost:4000/${data.image}`} alt='thumb' />
            <p className='blog-title'>{data.title}</p>
            <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
            <p className='blog-body'>{data.body}</p>
            <Gap height={20} />
            <Link title='Kembali ke Home' onClick={() => history.push('/')} />
            <Gap height={100}/>
        </div>
      )
    }
    return <p>Loading data...</p>
}

export default withRouter(DetailBlog)