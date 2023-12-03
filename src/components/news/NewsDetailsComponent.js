import React from 'react'
import Loader from '../../common/Loader/Loader';
import { Link } from 'react-router-dom';
import latestNews from '../../db/latestNews.json';


const NewsDetailsComponent = () => {
  const { data } = latestNews;
  let publicUrl = process.env.PUBLIC_URL + '/';
  const loading = 0;
  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className="blog-details">

            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-7">

                  <div className="blog-details__left">

                    <div className="blog-details__img">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg" alt="" />
                      <div className="blog-details__date">


                        <p> <i className="far fa-calendar"></i>
                          {/* {new Date(singleBlog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} */}
                        </p>
                      </div>
                    </div>
                    <div className="blog-details__content">
                      <h3 className="blog-details__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, impedit.</h3>
                      <p className="blog-details__text-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A exercitationem, eaque, reprehenderit facilis veritatis ducimus ipsa odit dicta aspernatur voluptatum est fugiat necessitatibus similique tenetur doloremque dignissimos ratione hic suscipit alias, esse blanditiis ut. Illo distinctio deleniti, laboriosam, error eaque quidem necessitatibus ipsa voluptatibus, aspernatur quae incidunt reprehenderit vel alias officiis dolor modi praesentium officia. Provident facilis sunt, saepe assumenda expedita accusantium quos dolorum aliquid vero fuga ut. Consequuntur debitis eligendi dolore beatae repudiandae ratione numquam modi eum voluptate ea iusto, reiciendis adipisci mollitia in recusandae illum quas placeat omnis dolorem aliquid, quos sapiente. Voluptatum tempore, sunt ea doloremque consectetur quia, quo omnis sed sequi odit suscipit laboriosam maiores sapiente ipsam eveniet id nisi nam est numquam laudantium a pariatur! Ipsa, nihil, nam voluptates mollitia quaerat a laboriosam atque dignissimos quis molestiae explicabo? Culpa architecto maiores, tempora totam temporibus ullam. Nostrum quisquam facere quis amet provident reprehenderit, delectus beatae maxime. </p>

                    </div>

                    <div className="blog-details__bottom">
                      <div className="blog-details__social-list">
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="https://www.facebook.com" target="_blank"><i className="fab fa-facebook"></i></Link>
                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                      </div>
                    </div>

                  </div>

                </div>
                
                <div className="blog-three">
                  <div className="container">
                    <div className="section-title text-center">
                      <h2 className="section-title__title">YOU MAY ALSO LIKE</h2>
                    </div >
                    <div className='row'>
                      {data.slice(0,3).map((post) => (
                        <div key={post.id} className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp px-2" data-wow-delay="100ms">
                          {/* Blog Three Single */}
                          <div className="blog-three__single">
                            <div className="blog-three__img">
                              <img src={publicUrl + post.url} alt="" />
                            </div>
                            <div className="blog-three__content">
                              <ul className="list-unstyled blog-three__meta">
                                <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-calendar"></i>{post.date}</Link></li>
                              </ul>
                              <h3 className="blog-three__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>{post.title}</Link></h3>

                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </section>
        )}
    </div>  )
}

export default NewsDetailsComponent