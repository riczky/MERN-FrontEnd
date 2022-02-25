import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogItem.scss'
import {Button, Gap} from '../../atoms'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const BlogItem = (props) => {

  const history = useHistory();
  const {image, title, name, date, body, _id, onDelete} = props;

  return (
    <div className='blog-item'>
        <img className='image-thum' src={image} alt='post' />
        <div className='content-detail'>
          <div className='title-wrapper'>
            <p className='title'>{title}</p>
            <div className='edit-wrapper'>
                <p className='edit' onClick={() => history.push(`/create-blog/${props._id}`)}>Edit</p> | <p className='delete' onClick={() => onDelete(_id) }>Delete</p>
            </div>


          </div>
            <p className='author'>{name} - {date}</p>
            <p className='body'>{body}</p>
          <Gap height={10} />
          <Button title='View Detail' onClick={() => history.push(`/detail-blog/${props._id}`)} />
        </div>
    </div>
  )
}

export default BlogItem