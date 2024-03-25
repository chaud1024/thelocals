"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ButtonGroupProps,
  ArrowProps,
  DotProps,
} from "react-multi-carousel/lib/types";

interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string;
}
interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}

const CustomDots = ({ index, active, onClick, carouselState }: DotProps) => {
  return <div onClick={() => onClick}>This is a Custom dots</div>;
};

type Props = {
  children: React.ReactNode;
};

export default function PostCarousel({ children }: Props) {
  return (
    <Carousel autoPlay infinite responsive={responsive} itemClass="m-2">
      {children}
    </Carousel>
  );
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
