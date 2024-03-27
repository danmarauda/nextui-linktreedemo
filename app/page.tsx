"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";

import { Card, CardBody } from "@nextui-org/card";

import { Avatar } from "@nextui-org/avatar";

import { Button } from "@nextui-org/button";

import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card className="w-96" shadow="lg">
        <CardBody className="flex flex-col items-center">
          <div className="flex justify-end w-full mb-6">
            <Snippet
              size="sm"
              hideSymbol
              codeString="google.com"
            />
          </div>
		  <div className="mb-4 flex flex-col items-center"> {/* Added flex and centered items */}
            <Avatar
              isBordered
              color="success"
              size="lg"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
            <h1 className="mt-2 text-lg font-bold">Jeffery Pippitt</h1> 
			<p className="text-sm text-muted-foreground">Web Dev</p>
          </div>
        </CardBody>
        <div className="mt-4 mb-4 mx-4 flex-grow flex justify-center items-center">
          {" "}
          {/* Adjusted margin bottom */}
          <Button
            startContent={<FaInstagram size={24} className="flex-gap-4" />}
            radius="full"
            variant="shadow"
            className="w-full bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-500 text-white shadow-lg px-6 py-3" // Added padding to the button
          >
            Instagram
          </Button>
        </div>
        <div className="mt-4 mb-4 mx-4 flex-grow flex justify-center items-center">
          {" "}
          {/* Adjusted margin top and bottom */}
          <Button
            startContent={<FaTwitter size={24} className="flex-gap-4" />}
            radius="full"
            variant="shadow"
            className="w-full bg-gradient-to-tr from-grey-500 to-green-500 text-white shadow-lg px-6 py-3" // Added padding to the button
          >
            X
          </Button>
        </div>
        <div className="mt-4 mb-4 mx-4 flex-grow flex justify-center items-center">
          {" "}
          {/* Adjusted margin top and bottom */}
          <Button
            startContent={<FaYoutube size={24} className="flex-gap-4" />}
            radius="full"
            variant="shadow"
            className="w-full bg-gradient-to-tr from-red-500 to-red-500 text-white shadow-lg px-6 py-3" // Added padding to the button
          >
            Youtube
          </Button>
        </div>

        <div className="mt-4 mb-4 mx-4 flex-grow flex justify-center items-center">
          {" "}
          {/* Adjusted margin top */}
          <Button
            startContent={<FaTiktok size={24} className="flex-gap-4" />}
            radius="full"
            variant="shadow"
            className="w-full bg-gradient-to-tr from-neutral-100 via-pink-500 to-blue-500 text-white shadow-lg px-6 py-3" // Added padding to the button
          >
            TikTok
          </Button>
        </div>
        <div className="mt-4 mb-4 mx-4 flex-grow flex justify-center items-center">
          {" "}
          {/* Adjusted margin top */}
          <Button
            startContent={<FaFacebook size={24} className="flex-gap-4" />}
            radius="full"
            variant="shadow"
            className="w-full bg-gradient-to-tr from-blue-100 to-blue-600 text-white shadow-lg px-6 py-3" // Added padding to the button
          >
            Facebook
          </Button>
        </div>
        <div className="mt-4 mb-4 mx-4 flex-grow flex justify-center items-center">
          {" "}
          {/* Adjusted margin top */}
          <Button
            startContent={<FaSnapchat size={24} className="flex-gap-4" />}
            radius="full"
            className="w-full bg-gradient-to-tr from-yellow-500 to-yellow-500 text-white shadow-lg px-6 py-3" // Added padding to the button
          >
            Snapchat
          </Button>
        </div>
      </Card>
    </section>
  );
}
