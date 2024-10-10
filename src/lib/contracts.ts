import { chain } from "./chain";
import { client } from "./client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";


const nftContractAddress = "0x407813E0743FD66dad070e2423D98AF85596ca10";
const rewardTokenContractAddress = "0x98b73A6032bF1c2a11C34F391f7b8325a53Cfb80";
const stakingContractAddress = "0x45b73286506541b52d46Bc2dD26e10354B44C15a";
const tokenSwapAddress = "0xcE825E513E573EF7d293Df92452fBeE3a7C1a12B";
const fiatTokenContractAddress = "0xE253C2Ef492A89eCE85392e322218c6Ce93b9860";


export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const FIAT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: fiatTokenContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});

export const SWAP_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: tokenSwapAddress,
});