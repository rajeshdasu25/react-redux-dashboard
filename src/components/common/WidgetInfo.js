import React from 'react';

function WidgetInfo(props) {
    const theme = props.theme ? props.theme : 'blue';

    return (
        <div className={`widget-info ${theme}`}>
            <div className="widget-info-icon"><i className="glyphicon glyphicon-user" aria-hidden="true"></i></div>
            <div className="widget-info-text"><h3>{props.text}</h3></div>
            <div className="widget-info-count"><h4>{props.count}</h4></div>
        </div>
    )
};

export default WidgetInfo;