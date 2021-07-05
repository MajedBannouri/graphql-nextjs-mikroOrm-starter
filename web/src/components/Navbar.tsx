import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";
interface Props {}

const Navbar: FC<Props> = (props) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex p={4}>
        <Box mr={2}> {data.me.username} </Box>
        <Button variant="link">Logout</Button>
      </Flex>
    );
  }
  return (
    <Flex bg={"tomato"} p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};

export default Navbar;
