import useWindowResize from "../custom-hook/use-window-resize";

function About (){

    const windowSize = useWindowResize();

    return <>
        <h1>About us Page</h1>
        <p>{windowSize.width}, {windowSize.height}</p>
    </>
}

export default About;