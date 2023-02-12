// import { Comment } from "react-disqus-components";
// import "./disqus.css";

// export const Disqus = () => {
//   const pageTitle = "Frans Kbarek Page";
//   const disqusConfig = {
//     identifier: "Frans Kbarek Page", // your page uniq id
//     url: "https://franskbarek.github.io", // uslug url
//     shortname: "frans-kbarek-page", // disqus shortname
//   };

//   return (
//     <div className="disqusPage-container">
//       <div className="disqusPage-items">
//         <Comment title={pageTitle} identifier={disqusConfig.identifier} url={disqusConfig.url} shortname={disqusConfig.shortname} />
//       </div>
//     </div>
//   );
// };

// import { DiscussionEmbed } from "disqus-react";
// import "./disqus.css";

// export const Disqus = () => {
//   return (
//     <div className="disqusPage-container">
//       <div className="disqusPage-items">
//         <DiscussionEmbed
//           shortname="franskbarekpage"
//           config={{
//             url: "https://franskbarek.github.io",
//             identifier: "franskbarekpage",
//             title: "franskbarekpage",
//             // language: "en_EN",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

import { DiscussionEmbed } from "disqus-react";
import { useLocation } from "react-router-dom";
import "./disqus.css";

export function SinglePageComment() {
  const location = useLocation();
  const path = location.pathname.split("/");
  console.log(path);
  return (
    <div className="disqusPage-container">
      <div className="disqusPage-items">
        <DiscussionEmbed
          shortname={`writes-group-${path[2]}-${path[3]}`} //alias harus unik
          config={{
            url: "https://franskbarek.github.io", //url website
            identifier: `writes-group/${path[2]}/${path[3]}`, //path
            title: `writes-group/${path[2]}/${path[3]}`, //samakan saja dengan path
          }}
        />
      </div>
    </div>
  );
}
