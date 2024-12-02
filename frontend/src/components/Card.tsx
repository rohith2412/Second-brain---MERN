import { ShareIcone } from "../icons/ShareIcon";

export function Card() {
  return (
    <div>
      <div className="bg-white  rounded-md border-gray-200 p-8 max-w-72 border">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcone />{" "}
            </div>
            Project Ideas
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <ShareIcone />
            </div>
            <div className=" text-gray-500">
              <ShareIcone />
            </div>
          </div>
        </div>
        <div className="pt-4">
        {/* <iframe  className="w-full" src="https://www.youtube.com/embed/G7Ux_wIi57E?si=bCuE5zNVyoUiXnYA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Do you think Islam is a threat to the UK? <a href="https://t.co/OWAavbPmNC">pic.twitter.com/OWAavbPmNC</a></p>&mdash; God Save Great Britain (@GSGB01) <a href="https://twitter.com/GSGB01/status/1863286342475526535?ref_src=twsrc%5Etfw">December 1, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charet="utf-8"></script>
        </div>
      </div>
    </div>
  );
}
