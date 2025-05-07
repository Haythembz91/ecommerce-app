import SportswearHeader from "@/componants/SportswearHeader";
import React from "react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SportswearHeader></SportswearHeader>
            <main>{children}</main>
        </div>
    );
}