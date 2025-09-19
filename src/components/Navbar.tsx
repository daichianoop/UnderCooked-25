import React from 'react';
import CardNav from "@/components/CardNav";

const Navbar = () => {
    const items = [
        {
            label: "About",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Team", ariaLabel: "About Team", href: "/team" },
                { label: "Vision", ariaLabel: "Our Vision", href: "/vision" }
            ]
        },
        {
            label: "Source",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Github", ariaLabel: "Github Org", href: "https://github.com/CattleLabs-by-UnderCooked-OGs" },
                { label: "Others", ariaLabel: "Other Resources", href: "/others" }
            ]
        },
        {
            label: "Information",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Documentation", ariaLabel: "Docs..", href: "/docs" },
                { label: "Usage Policy", ariaLabel: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", ariaLabel: "Our Terms and Conditions", href: "/terms" }
            ]
        }
    ];
    return (
        <div>
            <CardNav
                logo={"./namelogo1.png"}
                logoAlt="Company Logo"
                items={items}
                baseColor="#fff"
                menuColor="#000"
                buttonBgColor="#111"
                buttonTextColor="#fff"
                ease="power3.out"
            />
        </div>
    );
};

export default Navbar;