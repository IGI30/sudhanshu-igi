import React from "react";
import Moment from 'moment';

const RecentBlog = (props) => {
    const recentPosts = [
        {
            category_name: "Programming",
            cover_photo: "https://www.drfeeds.com/assets/public/image/posts/Picture1_zivbu5o.png",
            cover_thumbnail: "https://www.drfeeds.com/assets/public/CACHE/images/image/posts/Picture1_zivbu5o/57ec2a0af9490d3611bba8a951189d8f.jpg",
            created_at: "2020-03-24T18:51:18.947870Z",
            description: "<p>Many people asked me how I prepared for the SWC Pro test, what kind of algorithms I studied or how long I prepared for the same. My simple answer to them was, \"I didn't\".",
            id: 52,
            like_count: 1,
            slug: "master-the-art-of-programming",
            title: "Master the art of programming",
            view_count: 82
        },
        {
            category_name: "Programming",
            cover_photo: "https://www.drfeeds.com/assets/public/image/posts/1_jdgkU9sQWvaZnuiGLyc5_g.jpeg",
            cover_thumbnail: "https://www.drfeeds.com/assets/public/CACHE/images/image/posts/1_jdgkU9sQWvaZnuiGLyc5_g/b700f7d7dffc6c1660c118492804ee3b.jpeg",
            created_at: "2020-03-12T17:32:53.848511Z",
            description: "<p>Coding exercises are one of those practices so entrenched in our industry that we reproduce them unthinkingly, forgetting why they are there in the first place.</p>",
            id: 39,
            like_count: 0,
            slug: "coding-exercises-should-not-be-used-to-rank-candidates",
            title: "Coding Exercises Should Not Be Used to Rank Candidates",
            view_count: 15
        },
        {
            category_name: "Self Development",
            cover_photo: "https://www.drfeeds.com/assets/public/image/posts/1_3OvIqp9lHEATLsKUK1AESQ.jpeg",
            cover_thumbnail: "https://www.drfeeds.com/assets/public/CACHE/images/image/posts/1_3OvIqp9lHEATLsKUK1AESQ/d99f620e9ad3898cdb23544e8b30483e.jpeg",
            created_at: "2020-02-09T21:03:05.012097Z",
            description: "<p>I spat out the words with anger that surprised me: “Work-life balance is bullshit.” I was on a call with a reporter looking into doing a piece about the workshop I was delivering in a few weeks.",
            id: 22,
            like_count: 0,
            slug: "why-work-life-balance-is-bullshit",
            title: "Why Work-Life Balance Is Bullshit",
            view_count: 23
        }
    ];

    const postsRenderer = recentPosts.map((post, i) => 
        <BlogCard {...post} key={i} />
    )

    return (
        <section className="full-section">
            <div className="container">
                <h6 className="section-label">Read</h6>
                <h2 className="section-head">Recent Blog</h2><br/>
                <div className="row">
                    { postsRenderer }
                </div>
                <div className="row mb-5">
                    <div className="col-md-12">
                        <p>
                            <a onClick={ (event) => event.preventDefault() } href="#" className="btn btn-lg load-more">
                                Load more <i className="fa fa-refresh"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const BlogCard = (props) => {
    Moment.locale('en');

    return (
        <div className="col-md-4 col-sm-6">
            <div className="blog-entry">
                <a href={`https://www.drfeeds.com/blog/post/${props.id}/${props.slug}`} target="_blank" className="blog-img">
                    <img src={props.cover_thumbnail} className="img-responsive" alt={props.title} />
                </a>
                <div className="desc">
                    <span>
                        <small>{Moment(props.created_at).format('MMM d, yyyy')} </small> | 
                        <small> {props.category_name} </small> |
                        <small> <i className="fa fa-eye"></i> {props.view_count}</small>
                    </span>
                    <h3>
                        <a target="_blank" href={`https://www.drfeeds.com/blog/post/${props.id}/${props.slug}`}>{props.title}</a>
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: props.description.substring(0, 200) }}></p>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;