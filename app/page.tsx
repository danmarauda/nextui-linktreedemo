"use client";

import { Snippet } from "@nextui-org/snippet";

import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { Avatar } from "@nextui-org/avatar";

import { Button } from "@nextui-org/button";

import { CopyIcon } from "@/components/copyicon";
import { CheckIcon } from "@/components/checkicon";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  {
    /* change all hyperlinks to your social media accounts */
  }
  const handleInstaClick = () => {
    window.open("https://www.instagram.com/", "_blank");
  };
  const handleXClick = () => {
    window.open("https://twitter.com/", "_blank");
  };
  const handleFBClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };
  const handleSCClick = () => {
    window.open("https://www.snapchat.com/", "_blank");
  };
  const handleTTClick = () => {
    window.open("https://www.tiktok.com/en/", "_blank");
  };
  const handleYTClick = () => {
    window.open("https://www.youtube.com/", "_blank");
  };
  const handleLIClick = () => {
    window.open("https://www.linkedin.com/", "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card className="mx-20 w-full max-w-md" shadow="lg">
        <div className="flex justify-end w-full mb-6">
          {/* Your Snippet component */}
          <Snippet
            tooltipProps={{
              content: "My Website share the link 🙏",
              size: "sm",
              placement: "top",
              color: "primary",
            }}
            variant="bordered"
            copyIcon={<CopyIcon />}
            checkIcon={<CheckIcon />}
            codeString="google.com"   /* Your website */
            hideSymbol={true}
            style={{ padding: "2px", fontSize: "4px" }}
          />
        </div>
        <div className="mb-4 flex flex-col items-center">
          {/* Your Avatar, name, and description */}
          <Avatar
            isBordered
            color="success"
            size="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          
        </div>
        <CardHeader className="pb-0">
          <CardBody className="text-center">
            <h1 className="font-bold">Jeffery Pippitt</h1>
            <p className="font-semibold">Web Dev</p>
          </CardBody>
        </CardHeader>
        <CardBody className="p-4 grid gap-4">
          <Button
            className="h-10 rounded-lg bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            variant="solid"
            onClick={handleInstaClick} // Call the function on click
          >
            <FaInstagram />
            Instagram
          </Button>
          <Button
            className="h-10 rounded-lg bg-gradient-to-tr from-neutral-800 to-neutral-800 text-white shadow-lg"
            variant="solid"
            onClick={handleXClick} // Call the function on click
          >
            <FaTwitter />X
          </Button>
          <Button
            className="h-10 rounded-lg bg-gradient-to-tr from-blue-800 to-blue-800 text-white shadow-lg"
            variant="solid"
            onClick={handleFBClick} // Call the function on click
          >
            <FaFacebook />
            Facebook
          </Button>
          <Button
            className="h-10 rounded-lg bg-gradient-to-tr from-yellow-500 to-yellow-600 text-white shadow-lg"
            variant="solid"
            onClick={handleSCClick} // Call the function on click
          >
            <FaSnapchat />
            Snapchat
          </Button>
          <Button
            className="h-10 rounded-lg bg-gradient-to-tr from-red-400 via-blue-400 to-pink-400 text-white shadow-lg"
            variant="solid"
            onClick={handleTTClick} // Call the function on click
          >
            <FaTiktok />
            TikTok
          </Button>
          <Button
            className="h-10 rounded-lg bg-gradient-to-tr from-red-500 to-red-600 text-white shadow-lg"
            variant="solid"
            onClick={handleYTClick} // Call the function on click
          >
            <FaYoutube />
            Youtube
          </Button>
          <Button
            className="h-10 rounded-lg bg-gradient-to-tr from-blue-400 to-blue-600 text-white shadow-lg"
            variant="solid"
            onClick={handleLIClick} // Call the function on click
          >
            <FaLinkedin />
            LinkedIn
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
