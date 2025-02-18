"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!url.trim() || !shortUrl.trim()) {
      alert("Both URL and Short URL fields are required.");
      return;
    }

    setLoading(true);
    setGenerated("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: shortUrl }),
      });

      const result = await response.json();
      setLoading(false);

      if (!response.ok) {
        alert(result.message || "Something went wrong!");
        return;
      }

      setGenerated(`${window.location.origin}/${shortUrl}`);
      setUrl("");
      setShortUrl("");
      alert("URL Generated Successfully!");
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Failed to generate short URL. Please try again.");
    }
  };

  return (
    <motion.div
      className="mx-auto max-w-md bg-gradient-to-r from-green-400 to-green-500 my-16 p-10 rounded-xl shadow-lg text-white text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="font-extrabold text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Shorten Your URL
      </motion.h1>
      <motion.p
        className="text-sm opacity-80 mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Create easy-to-share short links instantly
      </motion.p>
      <div className="mt-6 space-y-4">
        <motion.input
          type="text"
          value={url}
          className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-white text-gray-900"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
          disabled={loading}
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="text"
          value={shortUrl}
          className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-white text-gray-900"
          placeholder="Enter your custom short URL"
          onChange={(e) => setShortUrl(e.target.value)}
          disabled={loading}
          whileFocus={{ scale: 1.05 }}
        />
        <motion.button
          onClick={generate}
          className="w-full bg-white text-green-600 font-bold py-3 rounded-lg transition duration-300 hover:bg-gray-100 disabled:bg-gray-400"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Generating..." : "Generate URL"}
        </motion.button>
      </div>
      {generated && (
        <motion.div
          className="mt-6 bg-white text-gray-900 p-4 rounded-lg shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-semibold text-lg">Your Shortened Link:</p>
          <code className="break-all">
            <Link
              target="_blank"
              href={generated}
              className="text-green-600 hover:underline"
            >
              {generated}
            </Link>
          </code>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Shorten;
