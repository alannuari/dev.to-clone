import React from 'react';
import Card from './Card';
import { listings, news, help } from './RightSidebarData';

const RightSidebar = () => {
    return (
        <aside className="rightBar">
            <div className="rightBar__card-hackathon">
                <p>
                    <img src="https://picsum.photos/200/300" alt="" />
                </p>
                <h2>
                    <a href="/#">"Hack the Planet" with New Relic & DEV</a>
                </h2>

                <p>
                    Use New Relic to build a climate-change observability app for the chance to win up to $5,000!
                    <strong>
                        <a href="/#">&nbsp;join the hackathon</a>
                    </strong>
                </p>
            </div>

            <Card tag="Listings" articles={listings} />

            <Card tag="#news" articles={news} />

            <Card tag="#help" articles={help} />
        </aside>
    );
};

export default RightSidebar;
