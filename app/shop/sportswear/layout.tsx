import SportswearHeader from "@/componants/SportswearHeader";
import React, {Suspense} from "react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header className={''}>
                <Suspense fallback={
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }>
                    <SportswearHeader></SportswearHeader>
                </Suspense>
            </header>
            <main>{children}</main>
        </div>
    );
}