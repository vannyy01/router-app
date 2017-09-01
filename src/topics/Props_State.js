/**
 * Created by vanny on 01.09.2017.
 */
import React from 'react';

export default () => {
    return (
        <div>
            <h1>Props v. State</h1>
            <p>New API Concept: props.match is given to any component rendered by Route. As you can see, the userId is
                provided by props.match.params. See more in v4 documentation. Alternatively, if any component needs
                access to props.match but the component wasn't rendered by a Route directly, we can use the
                    withRouter() Higher Order Component.</p>
        </div>
    )
    }