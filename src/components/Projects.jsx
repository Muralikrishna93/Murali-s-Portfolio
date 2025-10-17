import "../index.css";

const projects = [
        {
            title: 'Portfolio Website',
            desc: 'React Based Portfolio Website. Showcasing my skills, projects, and contact information in a sleek and modern design.',
            img: '/Images/Portfolio.png',
            link: 'https://github.com/Muralikrishna93/Portfolio_Mk'
        },
        {
            title: 'Shopping-Mart',
            desc: ' Shop the way you like.A full-stack e-commerce web application with user authentication, product management, and a shopping cart.',
            img: '/Images/ShoppingMart.jpeg',
            link: 'https://github.com/Muralikrishna93/Ecommerce'
        }
    ];

export default function Projects() {

    return (
        <section id="projects" className="container py-5">
            <h2 className="text-center mb-4">Projects</h2>
            <div className="row">
                {projects.map((p, i) => (
                    <div key={i} className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <img src={p.img} className="card-img-top" alt={p.title} />
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">{p.desc}</p>
                                <a href={p.link} target="_blank" className="btn btn-dark">View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
