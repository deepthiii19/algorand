let account = "";

// Connect Wallet (Simulated for now)
async function connectWallet() {
    alert("Open Pera Wallet and connect via WalletConnect (simulated)");

    // Demo wallet (TestNet)
    account = "YOUR_TESTNET_ADDRESS";

    document.getElementById("walletAddress").innerText =
        "Connected: " + account;
}

// Send ALGO Transaction (TestNet)
async function sendTransaction() {
    try {
        const algodClient = new algosdk.Algodv2(
            "",
            "https://testnet-api.algonode.cloud",
            ""
        );

        const params = await algodClient.getTransactionParams().do();

        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account,
            to: account,
            amount: 1000, // microAlgos
            suggestedParams: params
        });

        alert("Transaction created (signing needed via wallet)");

        console.log(txn);
    } catch (err) {
        console.error(err);
    }
}