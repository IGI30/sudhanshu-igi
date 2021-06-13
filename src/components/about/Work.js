import React from "react";
import { Nav, Tab } from "react-bootstrap";
import codeImage from "../../assets/images/img-code.jpeg";

const Work = (props) => {
    const projectDetails = {
        'mobile': [
            {
                'name': 'Pakwaan',
                'technologies': ['Kotlin', 'Java', 'Firebase', 'Firestore'],
                'description': `A social media app which enables to connect with friends, share what you’re cooking and see what others are having from all over the world. Explore the beauty of home made food.`,
                'link': 'https://play.google.com/store/apps/details?id=com.igi.pakwaan',
                'year': '2019'
            },
            {
                'name': 'Buku - Book Recommendataion System',
                'technologies': ['Kotlin', 'Java', 'Firebase', 'Django'],
                'description': `A adnroid application which will recommend books to the users based on their interests and currently liked books using Item-based and user-based collaborative filtering.`,
                'link': null,
                'year': '2018'
            }
        ],
        'web': [
            {
                'name': 'Dr Feeds',
                'technologies': ['Angular', 'Django', 'MySQL'],
                'description': `A web application to give rich blogging experience with WYSIWYG editor which will enable users to post, track favourites, track reading of blog posts easily.`,
                'link': 'http://www.drfeeds.com',
                'year': '2019'
            },
            {
                'name': 'Ravenient - TV Series Recommendataion System',
                'technologies': ['Angular', 'Django', 'MySQL', 'MachineLearning'],
                'description': `A Progressive Web Application which will recommend movies to the users based on their interests and currently rated movies. Here users can rate their already watched TV Series across different channels and it will recommend new TV series to the users according their interests and other factors. The AI model uses Neural networks, User Based and Item Based Collaborative Filtering techniques.`,
                'link': 'https://www.drfeeds.com/movie',
                'year': '2018'
            },
            {
                'name': 'Electricity Poral',
                'technologies': ['Laravel', 'PhP', 'VueJS', 'MySQL'],
                'description': `A web portal for admins to generate electricity bill automatically, maintain records, transaction generate & email e-bills.`,
                'link': 'https://ssphpgtiebill.com/login',
                'year': '2017'
            }
        ],
        'games': [
            {
                'name': 'Salvos Curre',
                'technologies': ['Java', 'Android', 'LibGDX', '2D'],
                'description': `A 2D endless runner game for android using LibGDX in Android Studio.`,
                'link': null,
                'year': '2018'
            },
            {
                'name': 'Pacman',
                'technologies': ['Java', 'Android', 'LibGDX', '2D'],
                'description': `An arcade game for android using LibGDX in Android Studio.`,
                'link': null,
                'year': '2018'
            },
            {
                'name': 'Space Invaders',
                'technologies': ['Java', 'Swing', '2d'],
                'description': `A 2D arcade game for desktop using Java Swing.`,
                'link': null,
                'year': '2017'
            },
            {
                'name': 'Scavengers Game',
                'technologies': ['Unity3D', 'C#', '2D'],
                'description': `A turn based, tile based, roguelike 2D game using Unity3D.`,
                'link': null,
                'year': '2015'
            },
            {
                'name': 'The Quiz Game',
                'technologies': ['C++', 'Console', '2D'],
                'description': `A desktop quiz-based console game which has series of questions, four options in each questions and lifelines for help using C++.`,
                'link': null,
                'year': '2015'
            },
            {
                'name': 'Turbo: The Game',
                'technologies': ['C++', 'Console', '2D'],
                'description': `A 2D car racing game for desktop command line using C++.`,
                'link': null,
                'year': '2015'
            }
        ],
        'ml': [
            {
                'name': 'Neural Art',
                'technologies': ['Python', 'Jupyter Notebook'],
                'description': `A desktop application developed in Python based on neural style transfer to transfer styles
                from one image to another.`,
                'link': null,
                'year': '2018'
            }
        ]
    };

    return (
        <section className="full-section">
            <div className="container">
                <h6 className="section-label">My Work</h6>
                <h2 className="section-head">Recent Work</h2><br/>
                <Tab.Container defaultActiveKey="mobile">
                    <Nav variant="tabs" className="flex-row mt-5 text-white">
                        <Nav.Item>
                            <Nav.Link eventKey="mobile">Mobile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="web">Web</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="games">Games</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="ml">AI/ML</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="mt-3">
                        {
                            Object.entries(projectDetails).map(([category, projects]) => 
                                <Tab.Pane eventKey={category} key={category}>
                                    <div className="d-flex row">
                                        {
                                            projects.map((project, i) => 
                                                <div className="col-md-6" key={i}>
                                                    <ProjectCard project={project} />
                                                </div>
                                            )
                                        }
                                    </div>
                                </Tab.Pane>
                            )
                        }
                    </Tab.Content>
                </Tab.Container>
            </div>
        </section>
    );
};

const ProjectCard = (props) => {
    const projectStyle = {
        'backgroundImage': `url(${codeImage})`
        // backgroundImage: 'url(https://source.unsplash.com/featured/?react)'
    };

    return (
        <div className="project" style={projectStyle}>
            <div className="desc">
                <div className="con">
                    <h3>
                        {
                            props.project.link?
                            <a target="_blank" href={ props.project.link }>{ props.project.name }</a>:
                            <a href="#" onClick={ (event) => event.preventDefault() }>{ props.project.name }</a>
                        }
                    </h3>
                    <span>
                        {
                            props.project.technologies.map((technology, i) =>
                                `${ technology }${ i == props.project.technologies.length - 1? '': ' | ' }`
                            )
                        }
                    </span><br/>
                    <span>
                        { props.project.description }
                    </span>
                    {/* <p className="icon">
                        <span><a href="#"><i className="fa fa-share"></i></a></span>
                        <span><a href="#"><i className="fa fa-eye"></i> 100</a></span>
                        <span><a href="#"><i className="fa fa-heart"></i> 49</a></span>
                    </p> */}
                </div>
            </div>
        </div>
    )
};

export default Work;