'use client';
import React from "react";
import Image from "next/image";
import flag from "@/assets/img/flag/flag-1.png";
import { DownArrow } from "@/components/svg";


export default function HeaderLanguage() {
    const [openLang, setOpenLang] = React.useState(false);
    return (
        <li>
            <a onClick={() => setOpenLang(!openLang)} id="header-bottom__lang-toggle" href="#">
                <span>
                    <Image src={flag} alt="flag-img" />
                    English
                </span>
                <span>
                    <DownArrow />
                </span>
            </a>
            <ul className={`header-bottom__lang-submenu ${openLang ? "open" : ""}`}>
                <li><a href="#">Arabic</a></li>
                <li><a href="#">Spanish</a></li>
                <li><a href="#">Mandarin</a></li>
            </ul>
        </li>
    )
}
