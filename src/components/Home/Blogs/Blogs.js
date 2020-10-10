import React from 'react';
import './Blogs.css';
import wilson from '../../../images/wilson.png'
import BlogsPost from '../BlogsPost/BlogsPost';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const blogData = [
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019',
        icon: faArrowRight,
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : wilson,
        date : '23 April 2019',
        icon: faArrowRight,
    },
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019',
        icon: faArrowRight,
    },
];


const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="blog-header text-center">
                    <h5 style={{color: '#1CC7C1'}}>OUR BLOG</h5>
                    <h2 style={{color: '#3A4256'}}>From Our Blog News</h2>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogsPost key={blog.title} blog={blog}/>)
                    }
                </div>
            </div>            
        </section>
    );
};

export default Blogs;