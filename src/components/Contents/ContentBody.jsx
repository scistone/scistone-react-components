import React from 'react';

export const ContentBody = ({title}) => {
    return(
        <div className='content-body'>
            <div className='content-body-contents'>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla congue faucibus. Mauris scelerisque mi at leo varius, eget auctor diam placerat. Maecenas dictum iaculis eleifend. Vivamus sodales vel est eu sagittis. Phasellus porttitor neque sed urna auctor, vel volutpat elit finibus. Praesent ipsum odio, bibendum nec sagittis a, blandit eget sem. Donec arcu ante, scelerisque eget feugiat quis, tempus tincidunt justo. Quisque tempus lacus nec leo pellentesque, non varius odio fermentum. Integer tempor blandit condimentum. Vestibulum luctus ultrices nisi vitae laoreet. Quisque laoreet augue non eros tempus mattis. Nulla metus turpis, pulvinar ut tincidunt vel, rhoncus in lectus. Ut vitae malesuada nisi, a blandit augue. Quisque aliquam eu metus sed congue. Nullam rhoncus lacus a blandit vestibulum.</p>
            </div>
        </div>
    );
};
