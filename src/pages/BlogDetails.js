import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleBlogDetails from '../components/blog/SingleBlogDetails';
import FooterTwo from '../common/footer/FooterTwo';

const BlogDetails = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Blog details"
                currentPage="Blog details" 
            />
            <SingleBlogDetails />
            <FooterTwo />
        </>
    )
}

export default BlogDetails;