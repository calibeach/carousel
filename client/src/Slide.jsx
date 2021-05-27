import React, { useState, useEffect } from "react";

export default function Slide(props) {
    const { title, media, cta, heading, position, status } = props;

    return (
		<div
			className={`${status} ${position}`}
			style={{
				backgroundImage: `url(${media.desktop})`,
			}}
		 />
    )
}