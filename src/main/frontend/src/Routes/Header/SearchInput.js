import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox, Input, ImageButton } from "Components/Universal";
import search_icon from "images/search_icon.svg";
import theme from "Style/theme";

const SearchInput = ({ placeholder }) => {
  const navigate = useNavigate();

  const LetSearch = (text) => {
    navigate(`/search/${text}`);
  };
  return (
    <FlexBox
      center
      width="100%"
      height="40px"
      maxWidth="393px"
      marginLeft="32px"
      borderRadius="5px"
      border={theme.colors.lightDark}
      outline={theme.colors.dark}
      horizontalPadding="16px"
    >
      <Input
        fullSize
        placeholder={placeholder}
        onKeyPress={LetSearch}
        fontSize="16px"
      />
      <ImageButton src={search_icon} onClick={LetSearch} />
    </FlexBox>
  );
};
export default SearchInput;
