import React from "react";
import { HStack, Button } from "@chakra-ui/react";
function Filter({ cate, action }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <HStack align="center">
      {cate.map((category, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              action(category);
            }}
            color="#c59d5f"
            _hover={{ bg: "#c59d5f", color: "#ffffff" }}
            _active={{
              bg: "#c59d5f",
              color: "#ffffff",
              transform: "scale(0.7)",
            }}
            _focus={{
                bg: "#c59d5f",
                color: "#ffffff",
              }}
          >
            {capitalizeFirstLetter(category)}
          </Button>
        );
      })}
    </HStack>
  );
}

export default Filter;
 