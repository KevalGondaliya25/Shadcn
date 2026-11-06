import React from "react";
import { Logo } from "@/components/icons";

const Footer: React.FC = () => {
    return (
        <footer className="w-full flex items-center justify-center py-3 relative bottom-0">
            <div className="max-w-7xl px-6 flex md:flex-row flex-col items-center md:justify-between justify-center w-full">
                <div className="block md:hidden py-3">
                    <Logo />
                </div>
                <div className="text-default-600 md:max-w-56">
                    2024 ALL RIGHTS RESERVED{" "}
                    <span className="md:block hidden">WAXD ON WHEELS LLC</span>
                </div>
                <span className="text-default-600 md:block hidden">
                    PRIVACY POLICY
                </span>
            </div>
        </footer>
    );
};

export default Footer;
