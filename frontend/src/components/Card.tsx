import { ShareIcone } from "../icons/ShareIcon";

interface CradProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }) {
  return (
    <div>
      <div className="bg-white  rounded-md border-gray-200 p-8 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcone />{" "}
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank"></a>
              <ShareIcone />
            </div>
            <div className=" text-gray-500">
              <ShareIcone />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={
                link.includes("youtu.be") || link.includes("watch")
                  ? `https://www.youtube.com/embed/${
                      new URL(link).searchParams.get("v") ||
                      link.split("youtu.be/")[1]
                    }`
                  : link
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
