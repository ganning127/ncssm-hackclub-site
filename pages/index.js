import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Container,
  Heading,
  Text,
  Img,
  Box,
  Flex,
  Button,
  Link,
  SimpleGrid,
  OrderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";

const PROJECTS = [
  {
    name: "Personal Website 💻",
    description:
      "We built our own personal website using HTML, CSS, and JavaScript!",
    link: "https://github.com/ganning127/ncssm-soft-dev-club/tree/main/Personal%20Website",
    img: "/project-website.png",
  },
  {
    name: "URL shortner 🔗",
    description:
      "A URL shortner built with express and replit-DB. We promise this isn't as difficult as it sounds!",
    link: "https://github.com/ganning127/ncssm-soft-dev-club/tree/main/URL%20Shortener",
    img: "/project-url.png",
  },
  {
    name: "Wordle 📝",
    description:
      "A text-based wordle game (with color!) inspired by the NY Times wordle game.",
    link: "https://github.com/ganning127/ncssm-soft-dev-club/tree/main/URL%20Shortener",
    img: "/project-wordle.png",
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>NCSSM Software Development Club</title>
        <meta
          name="description"
          content="We build cool projects, together. No prior programming experience required!"
        />
        <meta property="og:title" content="NCSSM Software Development Club" />
        <meta
          property="og:description"
          content="We build cool projects, together. No prior programming experience required!"
        />
        <meta property="og:image" content="https://i.imgur.com/CuViBCM.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        position="absolute"
        top="0"
        right="10"
        as="a"
        href="https://hackclub.com/"
        display={{ base: "none", md: "block" }}
      >
        <Img height="100px" src="/flag-orpheus-top.svg" alt="Orpheus Flag" />
      </Box>

      <Flex
        alignItems="center"
        justifyContent="center"
        height="70vh"
        width="100vw"
        bg="linear-gradient(rgba(0, 0, 0, 0.7), rgba(23, 23, 29	, 1)), url('/cover.JPG') top center no-repeat"
        bgSize="cover"
      >
        <Box textAlign="center">
          <Heading
            as="h1"
            size={{ base: "3xl", md: "3xl", lg: "4xl" }}
            color="white"
            fontWeight="black"
          >
            Welcome to NCSSM&apos;s <br />
            <Text as="span" color="#ec3750">
              Software Development Club
            </Text>
          </Heading>

          <Text
            as="h4"
            color="#f9fafc"
            fontWeight="medium"
            fontSize={{ base: "xl", lg: "3xl" }}
            mt={4}
          >
            We build fun projects, together!
          </Text>

          <Button
            as="a"
            href="#join"
            size="lg"
            mt={8}
            colorScheme="red"
            _hover={{ bg: "#ec3750" }}
          >
            Sign me up!
          </Button>
        </Box>
      </Flex>
      <Container maxW="container.xl" mb={16}>
        <Heading
          as="h2"
          size="2xl"
          color="#ec3750"
          textAlign="center"
          fontWeight="black"
        >
          We build cool things!
        </Heading>
        <Text
          as="h4"
          color="#f9fafc"
          textAlign="center"
          fontWeight="medium"
          fontSize={{ base: "md", lg: "xl" }}
          mt={4}
        >
          Also, we&apos;re all open source, so you can contribute to our
          projects!
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={16}>
          {PROJECTS.map((project, index) => {
            return (
              <Box
                as="a"
                href={project.link}
                transition="all 0.2s"
                target="_blank"
                _hover={{
                  transform: "scale(1.05)",
                }}
                key={index}
                p={5}
                shadow="dark-lg"
                rounded="md"
                textAlign="center"
              >
                <Img
                  src={project.img}
                  alt={project.name}
                  width={400}
                  height={300}
                  objectFit="cover"
                  rounded="md"
                  mx="auto"
                />
                <Heading
                  as="h3"
                  size="lg"
                  mt={4}
                  color="#ec3750"
                  fontWeight="extrabold"
                >
                  {project.name}
                </Heading>
                <Text as="p" color="#f9fafc" mt={2} fontWeight="semibold">
                  {project.description}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>

        <SimpleGrid
          mt={48}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          color="#f9fafc"
          fontWeight="medium"
          fontSize="2xl"
        >
          <Box>
            <Heading
              as="h2"
              size="2xl"
              color="#ec3750"
              fontWeight="black"
              id="join"
            >
              How do I join?
            </Heading>
            <OrderedList mt={8}>
              <ListItem>
                Join our{" "}
                <Link
                  href="https://www.facebook.com/groups/292833336282521/"
                  color="#ff8c37"
                  textDecor="underline"
                  _hover={{
                    textDecor: "wavy underline",
                  }}
                  isExternal
                >
                  Facebook Group
                </Link>
              </ListItem>

              <ListItem>
                Come to a meeting! No programming experience necessary :)
              </ListItem>
            </OrderedList>

            <Text fontSize="xl" mt={4}>
              If you have any questions, please feel email Ganning (
              <Link
                href="mailto:xu23g@ncssm.edu"
                color="#ff8c37"
                textDecor="underline"
                _hover={{
                  textDecor: "wavy underline",
                }}
              >
                xu23g@ncssm.edu
              </Link>
              ) or Jacob (
              <Link
                href="mailto:vanmeter23j@ncssm.edu"
                color="#ff8c37"
                textDecor="underline"
                _hover={{
                  textDecor: "wavy underline",
                }}
              >
                vanmeter23j@ncssm.edu
              </Link>
              )
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="2xl" color="#ec3750" fontWeight="black">
              Meetings
            </Heading>
            <Box shadow="dark-lg" rounded="md" p={4} mt={8}>
              <Text>
                <Text as="span" fontWeight="extrabold" color="#ff8c37">
                  Who:
                </Text>{" "}
                You! We welcome beginners and experienced programmers alike.
              </Text>
              <Text>
                <Text as="span" fontWeight="extrabold" color="#ff8c37">
                  When:
                </Text>{" "}
                Every Wednesday at 3:30pm
              </Text>
              <Text>
                <Text as="span" fontWeight="extrabold" color="#ff8c37">
                  Where
                </Text>
                : Engineering Suite
              </Text>

              <Text>
                <Text as="span" fontWeight="extrabold" color="#ff8c37">
                  Why:
                </Text>{" "}
                Because! We&apos;ll build cool projects together and have fun.
                Oh, also we have stickers
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      <Divider />
      <Text textAlign="center" color="#f9fafc" my={4} fontWeight="bold" px={4}>
        Made with love by{" "}
        <Text as="span" color="#ec3750">
          NCSSM Software Development Club
        </Text>{" "}
        in {new Date().getFullYear()}
      </Text>
    </>
  );
}
