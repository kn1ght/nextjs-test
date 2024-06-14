"use client";

import { DocumentType, graphql } from "@/gql";
import { getImageProps, ImageProps } from "next/image";
import { CSSProperties } from "react";

const ResponsiveImageFragment = graphql(`
  fragment ResponsiveImageFragment on Media {
    url
    alt
    sizes {
      card {
        url
        width
        height
      }
      thumbnail {
        url
      }
      tablet {
        url
        width
        height
      }
    }
  }
`);

type ResponsiveImageProps = {
  url: string;
  alt?: string;
  sizes?: string;
  desktopMedia?: string;
  mobileMedia?: string;
  priority?: boolean;
  width?: string;
  height?: string;
  objectFit?: CSSProperties["objectFit"];
  data: DocumentType<typeof ResponsiveImageFragment>;
};

export const ResponsiveImage = (props: ResponsiveImageProps) => {
  const {
    url,
    alt,
    sizes,
    desktopMedia,
    mobileMedia,
    priority,
    width,
    height,
    objectFit,
    data,
  } = props;

  const baseMediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL;

  const common: Pick<ImageProps, "alt" | "sizes" | "priority"> = {
    alt: alt ?? "",
    sizes: sizes ?? "100vw",
    priority,
  };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: data.sizes?.tablet?.width ?? 1024,
    height: data.sizes?.tablet?.height ?? 1024,
    src: `${baseMediaUrl}${data.sizes?.tablet?.url ?? url}`,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: data.sizes?.tablet?.width ?? 400,
    height: data.sizes?.tablet?.height ?? 300,
    src: `${baseMediaUrl}${data.sizes?.thumbnail?.url ?? url}`,
  });

  return (
    <picture>
      <source media={desktopMedia ?? "(min-width: 1000px)"} srcSet={desktop} />
      <source media={mobileMedia ?? "(max-width: 768px)"} srcSet={mobile} />
      <img
        {...rest}
        alt={alt}
        style={{
          width: width ?? "100%",
          height: height ?? "auto",
          objectFit: objectFit ?? "contain",
        }}
      />
    </picture>
  );
};
