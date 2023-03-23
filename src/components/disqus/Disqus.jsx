import { DiscussionEmbed } from "disqus-react";
import { useLocation } from "react-router-dom";
import "./disqus.css";

export function SinglePageComment() {
  const location = useLocation();
  const path = location.pathname.split("/");
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
