import React from 'react';

const Footer = () => {
    return (
        <div>
            <h2>How Reacts Works?</h2>
            <h4>Answer:
                It is actually a fontend javascript library.It also divides some large components to smaller one. It also gives the web developers flexibility to easily edit with efficiently updating and rendering small things. We can also call it a structured DOM tree with faster manipulation.
            </h4>

            <h2>Props Vs States</h2>

            <h4>Answer:
                Props can pass data from one to another component but in other case States can't pass data from one component to another as it is a local data storage. The change of state can happen when the client gives some action in other case props are immutable which means we can't edit or modify them. Props can be accessed by clild component but states can't. props makes a component reuseable but states can't.
            </h4>

        </div>
    );
};

export default Footer;