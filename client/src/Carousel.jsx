import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Slide from "./Slide";

export default function Carousel(props) {
    const [details, setDetails] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const [current, setCurrent] = useState(0);
    const [currInterval, setCurrInterval] = useState()
    const {url, toggle} = props;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) = setDetails(data.data))
        .then(() => {
            setIsLoading(false);
        })
        .catch((err) => console.log(err))
    }, [toggle])

    const createCards = () => {
        return details.map((element, index) => {
            return (
                <div className = {index === current? "active" : ""}>
                    {index === current && (
                        <Slide
                            key = {index}
                            status = {index === current ?
                            "slide active" : "slide"}
                            title = {element.title}
                            media = {element.media}
                            cta = {element.cta}
                            heading = {element.heading}
                            position = {element.ctaPosition}
                        />
                    )}
                </div>
            )
        })
    }

    const createDots = () => {
        const dots = [];
        for (let i = 0; i < details.length; i++) {
            dots.push (
                <FontAwesomeIcon
                    icon = {faCircle}
                    className = {i === current ? "dot bright" : "dot normal"}
                    key = {i}
                    id = {i}
                    onClick = {() => setCurrent(i)}
                />
            )
        }
        return dots;
    }

    return (
        <div className = "carousel">
            This is Carousel
        </div>
    )

}