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
                    <div className="project-card__image"></div>
                    <div className="project-card__title">
                        <p>{title}</p>
                    </div>
                    <div className="project-card__creator">
                        <p>{creator}</p>
                    </div>
                    <div className="project-card__button">
                        <button>More details</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectCardsData;