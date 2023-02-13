import { MuxVideo } from "../typings";

export const fetchMuxVideo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMuxVideo`)

    const data = await res.json();
    const muxVideo: MuxVideo = data.muxVideo;

    // console.log("fetching", muxVideo);

    return muxVideo
}