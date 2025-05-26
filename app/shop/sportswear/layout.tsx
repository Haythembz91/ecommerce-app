import SportswearHeader from "@/componants/SportswearHeader";
import React from "react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {

    
    return (
        <div>
            <header className={''}>
                <SportswearHeader></SportswearHeader>
            </header>
            <main>{children}</main>
        </div>
    );
}