'use client';

import { resolveL2Name, BASENAME_RESOLVER_ADDRESS } from "thirdweb/extensions/ens";
import { client } from "../lib/client";
import { base } from "thirdweb/chains";
import { useActiveAccount } from "thirdweb/react";
import { useEffect, useState } from "react";

export const Basenames = () => {
    const account = useActiveAccount(); // Returns active account object
    const [name, setName] = useState(""); // State to store the resolved name

    useEffect(() => {
        const resolveName = async () => {
            if (account?.address) {
                try {
                    const resolvedName = await resolveL2Name({
                        client, // Assuming you have initialized your client
                        address: account.address,
                        resolverAddress: BASENAME_RESOLVER_ADDRESS,
                        resolverChain: base,
                    });
                    setName(resolvedName || ''); // Update the state with the resolved name
                } catch (error) {
                    console.error("Error resolving name:", error);
                }
            }
        };

        resolveName(); // Call the async function to resolve the name
    }, [account?.address]); // Runs whenever account address changes

    return (
        <div style={{ width: "100%", margin: "20px 0", display: "flex", flexDirection: "column" }}>
            Your base name is: {name} for {account?.address}
        </div>
    );
};

