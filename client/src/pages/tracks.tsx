import React from "react";
import { Layout, QueryResult } from "../components";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { Track } from "../__generated__/types";
import TrackCard from "../containers/track-card";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

const Tracks = () => {

  const { data, loading, error } = useQuery(TRACKS);
  return <Layout grid>
    <QueryResult loading={loading} error={error} data={data}>
      {
        data?.tracksForHome?.map((track: Track, id) => (
          <TrackCard key={id} track={track} />
        ))
      }
    </QueryResult>
  </Layout>;
};

export default Tracks;
