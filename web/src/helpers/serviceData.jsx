import React from 'react';

const ServiceData = [{
    id: 1,
    title: "Develop your own AI specific bot",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
},
    {
        id: 2,
        title: "Optimize your work processes",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
        id: 3,
        title: "Created your own eco-system (website, app, chatbots)",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    }
    ,
    {
        id: 4,
        title: "Created your own eco-system (website, app, chatbots)",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {    id: 5,
        title: "Develop your own AI specific bot",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
        id: 6,
        title: "Optimize your work processes",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
        id: 7,
        title: "Created your own eco-system (website, app, chatbots)",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    }
    ,
    {
        id: 8,
        title: "Created your own eco-system (website, app, chatbots)",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    }
];

const ServiceCards = () => {
    return (
        <>
            {ServiceData.map(({ id, title, text }) => (
                <div key={id} className="card">
                    <div className="card-title">
                        <h1>{title}</h1>
                    </div>
                    <div className="description">
                        <p>{text}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ServiceCards;
