import * as React from "react";

import "./SnpDrawer.css";

import {
    Drawer,
    DrawerContent,
    DrawerSelectEvent,
} from "@progress/kendo-react-layout";
import {Button} from "@progress/kendo-react-buttons";
import {
    inboxIcon,
    calendarIcon,
    heartIcon,
    linkIcon,
    bellIcon,
    menuIcon,
} from "@progress/kendo-svg-icons";

const items = [
    {text: "Inbox", svgIcon: inboxIcon, selected: true, route: "/"},
    {separator: true},
    {text: "Notifications", svgIcon: bellIcon, route: "/notifications"},
    {text: "Calendar", svgIcon: calendarIcon, route: "/calendar"},
    {separator: true},
    {text: "Attachments", svgIcon: linkIcon, route: "/attachments"},
    {text: "Favourites", svgIcon: heartIcon, route: "/favourites"},
];

const SnpDrawer = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const [selected, setSelected] = React.useState(
        items.findIndex((x) => x.selected === true)
    );

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const onSelect = (e: DrawerSelectEvent) => {
        setSelected(e.itemIndex);
        setExpanded(!expanded);
    };

    return (
        <>
            {/*<div className="custom-toolbar">*/}
            {/*    <span className="mail-box">Mapa</span>*/}
            {/*    <Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick}/>*/}
            {/*</div>*/}
            <Drawer
                expanded={expanded}
                position={"start"}
                mode={"push"}
                mini={true}
                items={items.map((item, index) => ({
                    ...item,
                    selected: index === selected,
                }))}
                onSelect={onSelect}
            >
                <DrawerContent>{props.children}</DrawerContent>
            </Drawer>
        </>
    );
};


export {SnpDrawer};