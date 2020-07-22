import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Box from "./Box";
import Text from "./Text";
import Image from "./Image";

const InitialsElement = styled(Box)`
  text-transform: uppercase;
  text-align: center;
  color: #FFFFFF;
  background-color: ${props => props.bg };
  line-height: ${props => props.width + "px"};
`;

const Avatar = forwardRef(({ src, alt, width, initials, ...props }, ref) => {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        shape={"circle"}
        width={width}
        ref={ref}
        {...props}
      />
    );
  } else {
    const fontSize = width / (initials.length + 0.3);
    return (
      <InitialsElement
        borderWidth={1}
        borderStyle={"solid"}
        borderRadius={"50%"}
        fontSize={fontSize}
        width={width}
        height={width}
        // colorStyle={"avatar"}
        bg={getBgColorByInitials(initials)}
        ref={ref}
        {...props}
      >
        <Text as={"span"}
              color={"#FFFFFF"}
              // colorStyle={"avatar"}
        >
          {initials}
        </Text>
      </InitialsElement>
    );
  }
});

Avatar.displayName = "Avatar";

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  initials: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

function getBgColorByInitials(initials) {
  initials = initials || "";

  var colors = [
    "#5A8770", "#B2B7BB", "#6FA9AB", "#F5AF29",
    "#0088B9", "#F18636", "#D93A37", "#A6B12E",
    "#5C9BBC", "#F5888D", "#9A89B5", "#407887",
    "#9A89B5", "#5A8770", "#D33F33", "#A2B01F",
    "#F0B126", "#0087BF", "#F18636", "#0087BF",
    "#B2B7BB", "#72ACAE", "#9C8AB4", "#5A8770",
    "#EEB424", "#407887"
  ];

  var initialsStr = String(initials).toUpperCase();
  var idx = 0;

  for (var i = 0; i < initialsStr.length; i++)
    idx += initialsStr.charCodeAt(i) % 26;

  return colors[idx % 26];
}

export default Avatar;
