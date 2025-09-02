/* eslint-disable @typescript-eslint/no-explicit-any */
import Albums from "./Albums.js";
import Biography from "./Biography.js";
import Panel from "./Panel.js";
import { Suspense } from "react";

export default function ArtistPage({ artist }: any) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Biography artistId={artist.id} />
      <Panel>
        <Suspense fallback={<div>Loading...</div>}>
          <Albums artistId={artist.id} />
        </Suspense>
      </Panel>
    </>
  );
}

function AlbumsGlimmer() {
  return (
    <div className="bg-slate-300">
      <p>Loading...</p>
    </div>
  );
}
