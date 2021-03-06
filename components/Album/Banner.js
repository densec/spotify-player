import React from "react";
import { useSelector } from "react-redux";

function Banner({ album }) {
  return (
    <div className="py-32 px-5 relative flex items-end gap-6">
      {/* <img src={album.images[1]?.url} alt="" /> */}
      {/* content */}
      <div className="z-10">
        <p className="uppercase text-xs mb-3">{album?.album_type}</p>
        <h1 className="text-6xl font-black mb-1">{album?.name}</h1>
        <p className="opacity-80">
          {album?.artists?.map((artist) => artist.name).join(", ")}
        </p>
        <ul className="flex items-center gap-6 opacity-80 text-sm">
          <li className="">{album?.release_date}</li>
          <li className="list-disc">{album?.total_tracks} songs</li>
        </ul>
      </div>

      {/* fade */}
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, hsl(0, 0%, 0%) 180%)",
        }}
        className="absolute top-0 left-0 bottom-0 right-0"
      />
    </div>
  );
}

export default Banner;
