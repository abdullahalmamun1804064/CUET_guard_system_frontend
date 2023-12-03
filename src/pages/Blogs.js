import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from '../common/footer/FooterTwo';
import BlogsCard from '../components/blog/BlogCard';
import BlogsCardTwo from '../components/blog/BlogCardTwo';

const BlogVersionOne = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                heading="Blog Post"
                currentPage="Blog V-2"
            />
            <BlogsCard />
            {/* <BlogsCardTwo /> */}

            <FooterTwo />
        </>
    )
}

export default BlogVersionOne;