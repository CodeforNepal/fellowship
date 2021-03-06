import ContentType from "../types/content"
import MarkdownComponent from "./MarkdownComponent"

export interface Props {
    data: ContentType
}
export const TextLeft: React.FC<Props> = (props) => {
    const { data } = props
    return (
        <section className="relative py-20 bg-gray-300">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px", transform: "translateZ(0)" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-500">
                                <i className="fas fa-rocket text-xl"></i>
                            </div>
                            <h3 className="text-3xl font-semibold">
                                {data.title}
                            </h3>
                            <div className="mt-4 text-lg leading-relaxed text-gray-700">
                                <MarkdownComponent content={data.content} />
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img
                            alt="..."
                            className="max-w-full rounded-lg shadow-lg"
                            src={data.image}
                        />
                    </div>
                    
                </div>
            </div>
        </section>

    )
}