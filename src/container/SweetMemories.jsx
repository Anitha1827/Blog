import { Typography } from "@mui/material";
import React from "react";
import "./SweetMemories.css";

const SweetMemories = () => {
  return (
    <div className="text-black">
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="text-pink-600 font-bold text-xl mb-4"
      >
        Sweet Memories
      </Typography>
      <Typography className="text-base leading-relaxed">
        <h1 className="font-bold text-lg">January 17, 2017</h1>
        <br />
        <br />
        😦 I’m really missing her... Every night I’m crying like anything. I was
        still hoping she would consider me... but I don’t know whether I should
        wait for her or what to do... Tears...
        <br />
        <br />
        But I understand, she will be happy without me, and I should not disturb
        that. 🙂 😥
        <br />
        I hope she is happy… praying to God that she gets everything she wants.
        <br />
        <br />
        To be continued…
      </Typography>
    </div>
  );
};

export default SweetMemories;
