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

import { DiscussionEmbed } from "disqus-react";
import "./disqus.css";

export const Disqus = () => {
  return (
    <div className="disqusPage-container">
      <div className="disqusPage-items">
        <DiscussionEmbed
          shortname="franskbarekpage"
          config={{
            url: "https://franskbarek.github.io",
            identifier: "franskbarekpage",
            title: "franskbarekpage",
            // language: "en_EN",
          }}
        />
      </div>
    </div>
  );
};
