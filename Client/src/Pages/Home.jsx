import React, { useState } from "react";
import "./home.css";
import { FloatingNavDemo } from "../Components/FloatingNavDemo";
import { BackgroundBeamsDemo } from "../Components/BackgroundBeamsDemo";
import VideoPage from "../Components/VideoPage";
// import { useLocation } from 'react-router-dom';

export default function Home() {
  // const [videosDB, setVideosDB] = useState([
  //   {
  //     videoFile:
  //       "https://res.cloudinary.com/videoapi-demo/video/upload/v1/samples/fashion_model_ud4hnm?_a=DATAdtAAZAA0",
  //     thumbnail:
  //       "https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/website_assets/samples/fill/fill_1.jpg",
  //     title: "Deep Dive into Neural Networks",
  //     description:
  //       "An advanced course on the intricacies of neural networks and their applications.",
  //     duration: 600,
  //     views: 2500,
  //     isPublished: true,
  //     owner: "60d5f8bf4d4f5c55d4d1e619",
  //     createdAt: "2023-06-05T15:20:30.456Z",
  //     updatedAt: "2023-06-05T15:20:30.456Z",
  //   },
  //   {
  //     videoFile:
  //       "https://res.cloudinary.com/videoapi-demo/video/upload/v1/samples/mountains_drone_io9kwa?_a=DATAdtAAZAA0",
  //     thumbnail:
  //       "https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/website_assets/samples/fill/fill_1.jpg",
  //     title: "Introduction to Machine Learning",
  //     description:
  //       "A beginner's guide to understanding the basics of machine learning.",
  //     duration: 300, // Duration in seconds
  //     views: 1500,
  //     isPublished: true,
  //     owner: "60d5f8bf4d4f5c55d4d1e618", // Example ObjectId
  //     createdAt: "2023-06-01T12:34:56.789Z",
  //     updatedAt: "2023-06-01T12:34:56.789Z",
  //   },
  //   {
  //     videoFile:
  //       "https://res.cloudinary.com/videoapi-demo/video/upload/v1/samples/man_fashion_puq3sa?_a=DATAdtAAZAA0",
  //     thumbnail:
  //       "https://res.cloudinary.com/generative-ai-demos/image/upload/f_auto/q_auto/v1/website_assets/samples/fill/fill_1.jpg",
  //     title: "Understanding Blockchain",
  //     description:
  //       "A beginner's guide to understanding the basics of machine learning.",
  //     duration: 300, // Duration in seconds
  //     views: 1500,
  //     isPublished: true,
  //     owner: "60d5f8bf4d4f5c55d4d1e618", // Example ObjectId
  //     createdAt: "2023-06-01T12:34:56.789Z",
  //     updatedAt: "2023-06-01T12:34:56.789Z",
  //   },
  // ]);
  // const [searchQuery, setSearchQuery] = useState("");

  // const updateSearchQuery = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const filteredVideos = videosDB.filter(
  //   (video) =>
  //     video.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
  //     video.isPublished
  // );

  // const user = location.state?.user;

  return (
    <>
      <FloatingNavDemo />
      <BackgroundBeamsDemo />
      <VideoPage />
    </>
  );
}
