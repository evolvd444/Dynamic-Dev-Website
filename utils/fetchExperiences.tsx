import { Experience } from "../types";

export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getExperiences`)

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // console.log("fetching", experiences);

    return experiences
}