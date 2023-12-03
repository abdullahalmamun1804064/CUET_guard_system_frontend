import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCategory from '../blog-sidebar/BlogCategory';
import BlogComments from '../blog-sidebar/BlogComments';
import BlogLatestPost from '../blog-sidebar/BlogLatestPost';
import BlogQuery from '../blog-sidebar/BlogQuery';
import BlogSearch from '../blog-sidebar/BlogSearch';
import BlogTags from '../blog-sidebar/BlogTags';
import { Modal } from 'react-bootstrap';


import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSingleBlog } from '../../redux/actions/blogAction';
import Loader from '../../common/Loader/Loader';
import { useParams } from 'react-router-dom';

import { postBlogComment, getAllBlogComments, updateBlogComment, deleteBlogComment } from '../../redux/actions/blogCommentAction';

import { formatDateTimeWithAMPM } from '../../utils/timeDateFormate';

const SingleBlogDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { error, loading, singleBlog } = useSelector(state => state.blogs);
    const { user } = useSelector(state => state.auth);
    const { comments } = useSelector(state => state.blogComment);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [commentText, setCommentText] = useState('');

    const [showEditModal, setShowEditModal] = useState(false);
    const [editComment, setEditComment] = useState("");
    const [commentId, setCommentId] = useState("");

    const [showDeleteModal, setShowDeleteModal] = useState(false);
   
     console.log(comments);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!commentText.trim()) {
            return;
        }
        const blogId = id;

        try {
            await dispatch(postBlogComment({ comment: commentText, blogId: blogId, userId: user._id }));
            setCommentText('');
            setIsFormSubmitted(!isFormSubmitted);
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    const handleEdit = async() => {

        try {
            await dispatch(updateBlogComment({ comment: editComment, commentId: commentId, userId: user._id }));
            setCommentText('');
            setIsFormSubmitted(!isFormSubmitted);
            setShowEditModal(!showEditModal);
        } catch (error) {
            console.error('Error posting Edit comment:', error);
        }

    };
    const clickEditButton = (comment, commentId,e) => {
        e.preventDefault(); 
        setEditComment(comment);
        setCommentId(commentId);
        setShowEditModal(!showEditModal);
        setIsFormSubmitted(!isFormSubmitted);

     }
   
    

    const handleDelete = async () => {

        try {
            await dispatch(deleteBlogComment({ commentId: commentId, userId: user._id }));
            setIsFormSubmitted(!isFormSubmitted);
            setShowDeleteModal(!showDeleteModal);
        } catch (error) {
            console.error('Error Delete comment:', error);
        }

    };
    const clickDeleteButton = (commentId, e) => {
        e.preventDefault();
        setCommentId(commentId);
        setShowDeleteModal(!showDeleteModal);
        setIsFormSubmitted(!isFormSubmitted);
    }


    useEffect(() => {
        dispatch(getSingleBlog(id));
        dispatch(getAllBlogComments(id));
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }



    }, [dispatch, alert, error, isFormSubmitted])

    if (!singleBlog) {
        return <Loader />;
    }



    return (
        <div>
            {
                loading ? <Loader /> : (
                    <section className="blog-details">
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">

                                    <div className="blog-details__left">

                                        <div className="blog-details__img">
                                            <img src={singleBlog?.image} alt="" /> 
                                            <div className="blog-details__date">


                                                <p> <i className="far fa-calendar"></i> {new Date(singleBlog?.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                            </div>
                                        </div>
                                        <div className="blog-details__content">
                                            <ul className="blog-details__meta list-unstyled">
                                                <li><i className="far fa-comment"></i><span>({comments?.totalComments})</span></li>
                                            </ul>
                                            <h3 className="blog-details__title">{singleBlog?.title}</h3>
                                            <p className="blog-details__text-1" dangerouslySetInnerHTML={{__html:singleBlog?.description}}></p>

                                        </div>
                                      
                                        <div className="blog-details__bottom">
                                            <div className="blog-details__social-list">
                                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                                <Link to="#"><i className="fab fa-facebook"></i></Link>
                                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                            </div>
                                        </div>
                                        <div className="author-one">
                                            <div className="author-one__image">
                                                <img src={singleBlog?.author} alt={singleBlog?.user_name} />
                                            </div>
                                            <div className="author-one__content">
                                                <p className='mb-5'>Created by</p>
                                                <Link to=""><h3>{singleBlog?.user_name}</h3></Link>

                                            </div>
                                        </div>


                                        <div className="comment-form mb-5">
                                            <h3 className="comment-form__title">Reply</h3>
                                            <form
                                                action="#"
                                                className="comment-one__form contact-form-validated"
                                                noValidate="novalidate"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="comment-form__input-box comment-form__textarea">
                                                            <textareLink
                                                                name="message"
                                                                placeholder="Write a Comment"
                                                                value="dfgfgh"
                                                                onChange={(e) => setCommentText(e?.target?.value)} 
                                                            ></textareLink>
                                                        </div>

                                                        <div className="comment-form__btn-box">
                                                            <button type="submit" className="thm-btn comment-form__btn">
                                                                Post Comment
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="editmodal">
                                             <Modal show={showEditModal}  onHide={() => setShowEditModal(false)}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Edit Comment</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="comment-form__input-box comment-form__textarea">
                                                        <textareLink
                                                            name="message"
                                                            placeholder="Edit a Comment"
                                                            value={editComment}
                                                            onChange={(e) => setEditComment(e?.target?.value)}
                                                        ></textareLink>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" className=" btn-lg btn btn-outline-info m-2 px-4" onClick={() => setShowEditModal(false)}>Close</button>
                                                    <button type="button" className="btn-lg btn btn-outline-success" onClick={handleEdit}>Save</button>
                                                </Modal.Footer>
                                            </Modal>
                                                                           
                                        </div>

                                        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Are you sure delete this comment? : </Modal.Title>
                                                <button type="button" className="btn-lg btn btn-outline-info m-2 px-4" onClick={(e) => { e.preventDefault(); setShowDeleteModal(false); }}>no</button>
                                                <button type="button" className="btn-lg btn btn-outline-danger" onClick={(e) => { e.preventDefault(); handleDelete(); }}>yes</button>
                                               
                                            </Modal.Header>
                                        </Modal>

                                     

                                        <div className="comment-one">
                                            <h3 className="comment-one__title">{comments?.totalComments} Comments</h3>
                                            {comments?.comments?.map((comment) => (
                                                <div className="comment-one__single" key={comment?._id}>
                                                    <div className="comment-one__image d-flex justify-content-center" >
                                                        <img src={comment?.author?.avatar?.url} alt="" />
                                                    </div>
                                                    <div className="comment-one__content">
                                                        <h3>{comment?.author?.name}</h3>
                                                        <p>{comment.comment}</p>
                                                        <span>{formatDateTimeWithAMPM(comment?.date)}</span>
                                                        {user?._id === comment?.author?._id && (
                                                            <div className=' mt-3'>
                                                                <button type="button" className="btn-lg btn btn-outline-info m-2 px-4" onClick={(e) => clickEditButton(comment?.comment, comment?._id, e)}>Edit</button>
                                                                <button type="button" className="btn-lg btn btn-outline-danger" onClick={(e) => clickDeleteButton(comment?._id, e)}>Delete</button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                          ))}

                                        </div>

                                    </div>

                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="sidebar">

                                        <BlogLatestPost />
                                        <BlogQuery />
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
        </div>
    );
}
export default SingleBlogDetails;
