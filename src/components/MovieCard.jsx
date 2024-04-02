import { CardBody, Heading, Image, Card } from "@chakra-ui/react";
import { Hidden } from "@mui/material";
import React from "react";

export default function MovieCard(props) {
  return (
    <Card borderRadius={10} overflow="hidden" maxW="sm">
      <Image
        src={"https://image.tmdb.org/t/p/w500/" + props.poster_path}
      ></Image>
      <CardBody>
        <Heading size="10px">{props.title}</Heading>
      </CardBody>
    </Card>
  );
}
