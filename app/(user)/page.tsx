import { previewData } from "next/headers";

export default function HomePage() {
    if (previewData()) {
        return <div>Preview mode</div>
    }

    return (
        <div>
            <h1> Not in Preview</h1>
        </div>
    )
}