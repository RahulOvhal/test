import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = ()=>[
    {
        title: "Home",
        path : '/home',
        icon : <AiIcons.AiFillHome />,
        cName : "nav-text"
    },
    {
        title: "Product",
        path : '/product',
        icon : <AiIcons.AiFillShop />,
        cName : "nav-text"
    },
    {
        title: "About",
        path : '/about',
        icon : <AiIcons.AiFillInfoCircle />,
        cName : "nav-text"
    },
];