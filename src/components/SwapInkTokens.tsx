
import { TransactionButton, useActiveAccount, useReadContract} from "thirdweb/react";
import { SWAP_CONTRACT, FIAT_CONTRACT } from "../lib/contracts";
import { prepareContractCall, toEther, sendTransaction } from "thirdweb";
import { useEffect } from "react";
import { useState } from "react";
import { balanceOf } from "thirdweb/extensions/erc20";



export const SwapInkTokens = () => {
    
    const account = useActiveAccount(); // Returns active account object
    const address = account?.address;   // Get the wallet address
    const contract = SWAP_CONTRACT; // Load the contract
    const [_amountTokenB, setAmountTokenB] = useState(""); // Manage the amount input state
    const amount = BigInt(_amountTokenB) * BigInt(1000000000000000000);




    return (
        <div style={{ width: "100%", margin: "20px 0", display: "flex", flexDirection: "column" }}>
            
            <input
                type="number"
                placeholder="1000"
                value={_amountTokenB}
                onChange={(e) => setAmountTokenB(e.target.value)} // Update the state on input
                style={{
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "100%"
                }}
            />


          <TransactionButton
                  transaction={() => (
                    prepareContractCall({
                        contract:SWAP_CONTRACT,
                        method: "function swap(uint256 _amountTokenB)",
                        params: [amount],
                    })
                    
                )}
                onTransactionConfirmed={() => {
                    alert("Exchange complete");
                }}
                style={{
                    border: "none",
                    backgroundColor: "#333",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    width: "100%",
                    fontSize: "12px"
                }}
            >Exchange INK for Rands</TransactionButton> 






        </div>
    )
};





    

    

   
