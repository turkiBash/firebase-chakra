import React, { useState, useEffect } from "react";
import { getData } from "../components/Axios";
import { Grid, Box, Image, Text } from "@chakra-ui/react";

const Homepage = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    getData().then((result) => {
      setMemes(result);
    });
  }, [memes]);

  return (
    <Grid gridTemplateColumns="1fr 1fr 1fr">
      {/* {memes.filter(e => e.data.url !== "jpg").map((meme) => { */}
      {memes
        .filter((e) => e.data.url.endsWith("jpg"))
        .map((meme) => {
          return (
            <Box>
              {!meme.data.url.includes("jpg") ? (
                ""
              ) : (
                <Text>{meme.data.title}</Text>
              )}
              {meme.data.url.includes("jpg") ? (
                <Image
                  boxSize="sm"
                  objectFit="fill"
                  justifyContent="space-evenly"
                  key={meme.data.id}
                  src={meme.data.url}
                ></Image>
              ) : (
                ""
              )}
            </Box>
          );
        })}
    </Grid>
  );
};
export default Homepage;
