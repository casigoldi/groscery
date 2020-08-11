import React from "react";

import {
  TeaserWrapper,
  TeaserBackgroundContainer,
  TeaserContent,
  TeaserContentTitle,
  TeaserContentLink,
} from "./teaser.styles";

const Teaser = (props) => {
  const { title, imageUrl, url } = props;
  return (
    <TeaserWrapper>
      <TeaserBackgroundContainer imageUrl={imageUrl}>
        <TeaserContent>
          <TeaserContentTitle>{title}</TeaserContentTitle>
          <TeaserContentLink to={`${url}`}>Show more</TeaserContentLink>
        </TeaserContent>
      </TeaserBackgroundContainer>
    </TeaserWrapper>
  );
};

export default Teaser;
