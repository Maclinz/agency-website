import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import BlogCard from './BlogCard';
import Title from './Title'

import figma from '../img/figma.jpg'
import python from '../img/python.png'
import python2 from '../img/python2.png'
import fitness from '../img/fitness.png'
import css from '../img/css.png'
import react from '../img/react.png'

function BlogsSection() {
    const theme = useTheme()
    return (
        <BlogsSectionStyled className='u-pad-lg-2' theme={theme}>
            <div className="title-con">
                <Title
                    name={'View Our Latest Blogs'}
                    subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at, 
                        nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?"
                />
            </div>
            <div className="blogs-container">
                <BlogCard 
                    title={"What You Need to Know About Digital Design"}
                    name={'Figma'}
                    subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi esse molestiae.'}
                    date={'Jun 10, 2021'}
                    image={figma}
                />
                <BlogCard
                    title="A New Python Framework for Web Development"
                    name={'Python'}
                    subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi esse molestiae.'}
                    date={'Apr 05, 2021'}
                    image={python}
                />
                <BlogCard
                    title="Master HTML5 & CSS Animations New Course"
                    name={'HTML5 & CSS'}
                    subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi esse molestiae.'}
                    date={'Aug 12, 2021'}
                    image={css}
                />
                <BlogCard
                    title="Build a Realtime Chat App with React.js"
                    name={'React.js'}
                    subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi esse molestiae.'}
                    date={'Jan 17, 2021'}
                    image={react}
                />
                <BlogCard
                    title="Create and Design a Fitness Application"
                    name={'Figma'}
                    subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi esse molestiae.'}
                    date={'Mar 10, 2020'}
                    image={fitness}
                />
                <BlogCard
                    title="Create a GUI App with Python"
                    name={'Pyhton'}
                    subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi esse molestiae.'}
                    date={'Jun 10, 2021'}
                    image={python2}
                />
            </div>
        </BlogsSectionStyled>
    )
}

const BlogsSectionStyled = styled.section`
    .blogs-container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-gap: 2rem;
        padding-top: 3rem;
    }
`;

export default BlogsSection