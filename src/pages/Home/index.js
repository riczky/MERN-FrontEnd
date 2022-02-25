import React, { useEffect, useState } from 'react'
import {BlogItem, Button, Gap} from '../../components'
import './home.scss'  
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setDataBlog } from '../../config/redux/action'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const Home = () => {
  const [counter, setCounter] = useState(1);
  const {dataBlog, page} = useSelector(state => state.homeReducer);


  console.log('page:', page);
  console.log('state global:' , dataBlog);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setDataBlog(counter));  
  }, [counter, dispatch])

  const history = useHistory();

  // Pagination
  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter -1);
    console.log(counter);
  }

  const next = () => {
    setCounter(counter + 1)
    console.log(counter);
  }

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Apakah anda yakin untuk menghapus?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            // console.log(id);
            Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
              console.log('success delete: ', res.data);
              dispatch(setDataBlog(counter));   
            })
            .catch(err => {
              console.log('error', err);
            })
          }
        },
        {
          label: 'Tidak',
          onClick: () => console.log('user tidak setuju')
        }
      ]
    });
  }

  return (
    <div className='home-page-wrapper'>
        <div className='create-wrapper'>
          <Button title="Create Blog" onClick= {() => history.push('/create-blog')}  />
        </div>
        {/* <p>{name}</p> */}
        <Gap height={20} />
        <div className='content-wrapper'>
    
          {dataBlog.map(blog => {
            return <BlogItem key={blog._id} image={`http://localhost:4000/${blog.image}`} title={blog.title} body={blog.body} name={blog.author.name} date={blog.createdAt} _id={blog._id} onDelete={confirmDelete}/>
          })}
    
        </div>
        <div className='pagination'>
          <Button title="Previous" onClick={previous} />
          <Gap width={20} />
          <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
          <Gap width={20} />
          <Button title="Next" onClick={next} />
        </div>
        <Gap height={100} />
    </div>
    
  )
}

export default Home;