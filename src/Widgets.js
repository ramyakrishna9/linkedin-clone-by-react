import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
          <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
          </div>
    
          <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn news</h2>
                <InfoIcon />

            </div>
            {newsArticle("Gintas React is back", "Top news- 9099 readers")}
            {newsArticle("Coronavirus:Lt updates", "Top news- 3888 readers")}
            {newsArticle("Tesla hits new highs", "Top news- 9099 readers")}
            {newsArticle("Bitcoin breaks $22k", "Top news- 3888 readers")}
            {newsArticle("Is Redux too good?", "Top news- 9099 readers")}
            {newsArticle("PAPA react launches too good", "Top news- 3888 readers")}
            {newsArticle("Gintas React is back", "Top news- 9099 readers")}
            {newsArticle("Coronavirus:Lt updates", "Top news- 3888 readers")}
            {newsArticle("Gintas React is back", "Top news- 9099 readers")}
            {newsArticle("Coronavirus:Lt updates", "Top news- 3888 readers")}
            
        </div>
    )
}

export default Widgets
