import React from 'react';

const ProjectCards = [{
    id: 1,
    title: "Landing page dedicated to Van Gogh",
    creator: "Web Deisgn",
},
    {
        id: 2,
        title: "Landing page dedicated to Van Gogh",
        creator: "Web Deisgn",
    },
    {
        id: 3,
        title: "Landing page dedicated to Van Gogh",
        creator: "Web Deisgn",
    },
    {
        id: 4,
        title: "Landing page dedicated to Van Gogh",
        creator: "Web Deisgn",
    },
    {
        id: 5,
        title: "Landing page dedicated to Van Gogh",
        creator: "Web Deisgn",
    },
    {
        id: 6,
        title: "Landing page dedicated to Van Gogh",
        creator: "Web Deisgn",
    },
];

const ProjectCardsData = () => {
    return (
        <>
            {ProjectCards.map(({ id,title,creator }) => (
                <div key={id} className="project-card">
                    <div className="project-items">
                        <p className="card-title">Services: </p>
                        <h4 className="card-subtitle">UX/UI design</h4>
                        <p className="card-title">Client: </p>
                        <h4 className="card-subtitle">For retail chain, micro site for insurance company,
                            cybersecurity audit for bank…</h4>
                        <div className="project-card__btn">
                            <button>View site</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectCardsData;