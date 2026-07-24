"use client";

import { useCallback, useState } from "react";
import Skeleton from "./Skeleton";

export type ImageSource = {
	srcSet: string;
	media?: string;
};

export type Props = {
	src: string;
	sources?: ImageSource[];
	alt?: string;
	width?: number;
	height?: number;
	/* Classes for the wrapper, eg sizing/rounding shared by the skeleton and the image. */
	className?: string;
	imgClassName?: string;
	/* Reserves layout space (eg "aspect-[3/2]") only while the image hasn't loaded yet. */
	aspectClassName?: string;
};

function ResponsiveImage({
	src,
	sources = [],
	alt = "",
	width,
	height,
	className = "",
	imgClassName = "",
	aspectClassName = "",
}: Props) {
	const [loaded, setLoaded] = useState(false);

	/* Covers images already in the browser cache: the "load" event can fire
	 * before React attaches onLoad, so check .complete as soon as the node mounts. */
	const imgRef = useCallback((node: HTMLImageElement | null) => {
		if (node?.complete) {
			setLoaded(true);
		}
	}, []);

	return (
		<div
			className={`relative overflow-hidden ${!loaded ? aspectClassName : ""} ${className}`}
		>
			{!loaded && <Skeleton />}
			<picture>
				{sources.map((source) => (
					<source key={source.media ?? source.srcSet} {...source} />
				))}
				<img
					ref={imgRef}
					src={src}
					alt={alt}
					width={width}
					height={height}
					onLoad={() => setLoaded(true)}
					onError={() => setLoaded(true)}
					className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${imgClassName}`}
				/>
			</picture>
		</div>
	);
}

export default ResponsiveImage;
