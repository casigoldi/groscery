import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTeaserHomepage } from "../../redux/teaser/teaser.selector";
import Teaser from "../teaser/teaser.component";

import { TeasersContainer } from "./teasers.styles";

const Teasers = (props) => {
  const { teasers } = props;

  return (
    <TeasersContainer>
      {teasers.map(({ id, ...args }) => (
        <Teaser key={id} {...args} />
      ))}
    </TeasersContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  teasers: selectTeaserHomepage,
});

export default connect(mapStateToProps)(Teasers);
